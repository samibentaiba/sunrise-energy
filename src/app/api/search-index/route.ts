import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { glob } from "glob";
import * as parser from "@babel/parser";
import traverse from "@babel/traverse";

type SearchResult = {
  path: string;
  content: string;
};

const SEARCH_TERM = "motion"; // The search term you're looking for
const SEARCH_DIRS = ["src/app", "src/components"]; // Directories to search
const FILE_PATTERN = "**/*.{js,jsx,ts,tsx}"; // File extensions to search

// Function to parse JSX/TSX content
function parseJSX(content: string) {
  try {
    return parser.parse(content, {
      sourceType: "module",
      plugins: ["jsx", "typescript"],
    });
  } catch (error) {
    console.error("Error parsing JSX content:", error);
    throw error; // Re-throw the error after logging it
  }
}

// Function to search within a file
function searchInFile(filePath: string, searchTerm: string): string[] {
  const content = fs.readFileSync(filePath, "utf-8"); // Read the file content
  const matches: string[] = [];

  try {
    const ast = parseJSX(content); // Parse the content into an AST
    traverse(ast, {
      JSXText(path) {
        const text = path.node.value.trim();
        if (text.toLowerCase().includes(searchTerm.toLowerCase())) {
          matches.push(text); // Add matching content to the results
        }
      },
      JSXAttribute(path) {
        const { name, value } = path.node;
        if (
          value &&
          value.type === "StringLiteral" &&
          value.value.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          matches.push(`${name.name}="${value.value}"`); // Add matching attribute to the results
        }
      },
    });
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
  }

  return matches; // Return all matches found in the file
}

// Function to search the entire project
function searchProject(): SearchResult[] {
  const results: SearchResult[] = [];

  for (const dir of SEARCH_DIRS) {
    console.log(`Searching in directory: ${dir}`); // Log the directory being searched
    const files = glob.sync(path.join(dir, FILE_PATTERN), { absolute: true }); // Get files matching the pattern

    console.log(`Found ${files.length} files in ${dir}`); // Log the number of files found

    for (const file of files) {
      console.log(`Processing file: ${file}`); // Log each file being processed
      const matches = searchInFile(file, SEARCH_TERM); // Search the file for the term
      for (const match of matches) {
        results.push({
          path: path.relative(process.cwd(), file), // Store relative file path
          content: match, // Store matched content
        });
      }
    }
  }

  return results; // Return the search results
}

// pages/api/search-index.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const results = searchProject(); // Your search logic to gather results
      res.status(200).json(results); // Send the results as JSON
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to fetch search index' }); // Return error if any
    }
  } else {
    // If method is not GET, return Method Not Allowed
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
