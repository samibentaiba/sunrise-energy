// lib/search.ts
import fs from "fs";
import path from "path";
import { glob } from "glob";
import ts from "typescript";

export type SearchResult = {
  path: string;
  content: string;
};

const SEARCH_TERM = "motion";
const SEARCH_DIRS = ["src/app", "src/components"];
const FILE_PATTERN = "**/*.{js,jsx,ts,tsx}";

// Function to parse TypeScript and JSX/TSX
function parseTSX(content: string) {
  const sourceFile = ts.createSourceFile(
    "temp.tsx", // A placeholder file name
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

export function searchProject(searchTerm: string): SearchResult[] {
  const results: SearchResult[] = [];
  let failedFiles: string[] = []; // For tracking files that couldn't be processed

  for (const dir of SEARCH_DIRS) {
    const files = glob.sync(path.join(dir, FILE_PATTERN), { absolute: true });

    for (const file of files) {
      try {
        const matches = searchInFile(file, searchTerm);
        for (const match of matches) {
          results.push({
            path: path.relative(process.cwd(), file),
            content: match,
          });
        }
      } catch (error) {
        failedFiles.push(file); // Track failed files
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
