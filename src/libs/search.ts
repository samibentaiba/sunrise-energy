// libs/search.ts
import fs from "fs";
import path from "path";
import { glob } from "glob";
import ts from "typescript";
import { minimatch } from "minimatch";

export type SearchResult = {
  path: string;
  content: string;
};

// Paths or glob-style patterns to exclude from the search
const EXCLUDED_PATHS = [
  "src/components/theme-provider.tsx",
  "src/components/pages/aides/SubSide/radio-group",
  "src/components/pages/aides/SubSide/slider",
  "**/ui/**", // exclude any folder named "ui"
];

// Function to parse TypeScript and JSX/TSX
function parseTSX(content: string) {
  const sourceFile = ts.createSourceFile(
    "temp.tsx",
    content,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX
  );
  return sourceFile;
}

function searchInFile(filePath: string, searchTerm: string): string[] {
  const content = fs.readFileSync(filePath, "utf-8");
  const matches: string[] = [];

  try {
    if (filePath.endsWith(".js") || filePath.endsWith(".jsx")) {
      const regex = new RegExp(searchTerm, "gi");
      const match = content.match(regex);
      if (match) {
        matches.push(...match);
      }
    } else {
      const sourceFile = parseTSX(content);

      const visitNode = (node: ts.Node) => {
        if (ts.isJsxText(node)) {
          const text = node.text.trim();
          if (text.toLowerCase().includes(searchTerm.toLowerCase())) {
            matches.push(text);
          }
        }
        if (
          ts.isJsxAttribute(node) &&
          node.initializer &&
          ts.isStringLiteral(node.initializer)
        ) {
          const value = node.initializer.text.toLowerCase();
          if (value.includes(searchTerm.toLowerCase())) {
            if (ts.isIdentifier(node.name)) {
              matches.push(`${node.name.text}="${node.initializer.text}"`);
            }
          }
        }
        ts.forEachChild(node, visitNode); // Traverse child nodes
      };

      visitNode(sourceFile);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error processing file ${filePath}:`, error.message);
    } else {
      console.error(`Error processing file ${filePath}: ${error}`);
    }
  }

  return matches;
}

function isPathExcluded(filePath: string): boolean {
  const normalized = filePath.replace(/\\/g, "/");

  return EXCLUDED_PATHS.some((pattern) =>
    minimatch(normalized, pattern, { matchBase: true })
  );
}

export function searchProject(searchTerm: string): SearchResult[] {
  const results: SearchResult[] = [];
  const failedFiles: string[] = [];

  for (const dir of ["src/components"]) {
    const files = glob.sync(path.join(dir, "**/*.{js,jsx,ts,tsx}"), {
      absolute: true,
    });

    for (const file of files) {
      const normalizedFile = file.replace(/\\/g, "/");

      if (isPathExcluded(normalizedFile)) {
        continue;
      }

      try {
        const matches = searchInFile(file, searchTerm);
        for (const match of matches) {
          results.push({
            path: path.relative(process.cwd(), file),
            content: match,
          });
        }
      } catch (error) {
        failedFiles.push(file);
        if (error instanceof Error) {
          console.error(`Error processing file ${file}: ${error.message}`);
        } else {
          console.error(`Error processing file ${file}: ${String(error)}`);
        }
      }
    }
  }

  if (failedFiles.length > 0) {
    console.log(
      `Failed to process the following files: ${failedFiles.join(", ")}`
    );
  }

  return results;
}
