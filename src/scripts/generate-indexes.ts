// src/scripts/generate-indexes.ts
import path from "path";
import fs from "fs";
import { glob } from "glob";
import ts from "typescript";
import { minimatch } from "minimatch";

// Type definitions
type SearchResult = {
  path: string;
  content: string;
};

interface SearchIndexEntry {
  path: string;
  content: string;
}

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
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    const matches: string[] = [];

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
          if (text && (searchTerm === "" || text.toLowerCase().includes(searchTerm.toLowerCase()))) {
            matches.push(text);
          }
        }
        if (
          ts.isJsxAttribute(node) &&
          node.initializer &&
          ts.isStringLiteral(node.initializer)
        ) {
          const value = node.initializer.text;
          if (searchTerm === "" || value.toLowerCase().includes(searchTerm.toLowerCase())) {
            if (ts.isIdentifier(node.name)) {
              matches.push(`${node.name.text}="${node.initializer.text}"`);
            }
          }
        }
        ts.forEachChild(node, visitNode); // Traverse child nodes
      };

      visitNode(sourceFile);
    }

    return matches;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error processing file ${filePath}:`, error.message);
    } else {
      console.error(`Error processing file ${filePath}: ${String(error)}`);
    }
    return [];
  }
}

function isPathExcluded(filePath: string): boolean {
  const normalized = filePath.replace(/\\/g, "/");

  return EXCLUDED_PATHS.some((pattern) =>
    minimatch(normalized, pattern, { matchBase: true })
  );
}

function searchProject(searchTerm: string): SearchResult[] {
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

function generateSearchIndex() {
  // You can adjust the search term or pass an empty string for all content.
  const searchTerm = "";  // Use empty string to index all content

  // Get the results by passing the searchTerm
  const results = searchProject(searchTerm);

  // Define the output path for the search index
  const outputPath = path.join(process.cwd(), "src/data", "search-index.json");

  // Create the src/data directory if it doesn't exist
  const DataDir = path.join(process.cwd(), "src/data");
  if (!fs.existsSync(DataDir)) {
    fs.mkdirSync(DataDir, { recursive: true });
  }

  // Write the results to the output file
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));

  console.log(`✅ search-index.json generated with ${results.length} entries`);
  return results;
}

function generateComponentMap(entries: SearchIndexEntry[]) {
  const outPath = path.resolve("src/data/componentMap.ts");
  
  // Create the data directory if it doesn't exist
  const dataDir = path.dirname(outPath);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  const tsxPaths = Array.from(
    new Set(
      entries
        .map((entry) => entry.path)
        .filter((p) => p.endsWith(".tsx"))
    )
  );

  const hasDefaultExport = (filePath: string): boolean => {
    try {
      const fullPath = path.resolve(filePath);
      const content = fs.readFileSync(fullPath, "utf-8");
      return /export\s+default\s+/.test(content);
    } catch (err) {
      console.warn(`⚠️  Failed to read file: ${filePath}`, err);
      return false;
    }
  };

  const validPaths = tsxPaths
    .filter((p) => {
      const localPath = path.resolve(p);
      return hasDefaultExport(localPath);
    })
    .map((p) =>
      p
        .replace(/^src\//, "") // remove src/
        .replace(/\.tsx$/, "") // remove .tsx
    )
    .sort();

  const componentMap = `
import type { ComponentType } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const componentMap: Record<string, () => Promise<{ default: ComponentType<any> }>> = {
${validPaths.map((p) => `  "${p}": () => import("@/${p}")`).join(",\n")}
};
`;

  fs.writeFileSync(outPath, componentMap, "utf-8");

  console.log(
    "✅ componentMap generated with " +
      validPaths.length +
      " entries at " +
      outPath
  );
}

// Function to build both indexes
function buildIndexes() {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`\n🔄 Building indexes at ${timestamp}...`);
  
  try {
    const searchResults = generateSearchIndex();
    generateComponentMap(searchResults);
    console.log(`✨ All indexes built successfully at ${timestamp}`);
  } catch (error) {
    console.error("❌ Error building indexes:", error);
  }
}

// Generate indexes and exit
buildIndexes();