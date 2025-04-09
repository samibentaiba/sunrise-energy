// lib/search.ts
import fs from "fs";
import path from "path";
import { glob } from "glob";
import * as parser from "@babel/parser";
import traverse from "@babel/traverse";

export type SearchResult = {
  path: string;
  content: string;
};

const SEARCH_TERM = "motion";
const SEARCH_DIRS = ["src/app", "src/components"];
const FILE_PATTERN = "**/*.{js,jsx,ts,tsx}";

function parseJSX(content: string) {
  return parser.parse(content, {
    sourceType: "module",
    plugins: [
      "jsx",
      "typescript",
      "classProperties",
      "decorators-legacy",
      "dynamicImport",
      "nullishCoalescingOperator",
      "optionalChaining",
      "topLevelAwait",
    ],
  });
}

function searchInFile(filePath: string, searchTerm: string): string[] {
  const content = fs.readFileSync(filePath, "utf-8");
  const matches: string[] = [];

  try {
    const ast = parseJSX(content);
    traverse(ast, {
      JSXText(path) {
        const text = path.node.value.trim();
        if (text.toLowerCase().includes(searchTerm.toLowerCase())) {
          matches.push(text);
        }
      },
      JSXAttribute(path) {
        const { name, value } = path.node;
        if (
          value &&
          value.type === "StringLiteral" &&
          value.value.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          matches.push(`${name.name}="${value.value}"`);
        }
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error processing file ${filePath}:`, error.message);
    } else {
      console.error(`Error processing file ${filePath}:`, error);
    }
  }

  return matches;
}

export function searchProject(): SearchResult[] {
  const results: SearchResult[] = [];
  let failedFiles: string[] = [];  // لحفظ الملفات التي لم تتم معالجتها بشكل صحيح

  for (const dir of SEARCH_DIRS) {
    const files = glob.sync(path.join(dir, FILE_PATTERN), { absolute: true });

    for (const file of files) {
      try {
        const matches = searchInFile(file, SEARCH_TERM);
        for (const match of matches) {
          results.push({
            path: path.relative(process.cwd(), file),
            content: match,
          });
        }
      } catch (error) {
        failedFiles.push(file);  // إضافة الملف الذي فشل
        if (error instanceof Error) {
          console.error(`Error processing file ${file}: ${error.message}`);
        } else {
          console.error(`Error processing file ${file}: ${String(error)}`);
        }
      }
    }
  }

  if (failedFiles.length > 0) {
    console.log(`Failed to process the following files: ${failedFiles.join(', ')}`);
  }

  return results;
}
