import path from "path";
import fs from "fs";
import { searchProject } from "../libs/search";

// You can adjust the search term or pass an empty string for all content.
const searchTerm = "";  // Or you can use "*" to search everything

// Get the results by passing the searchTerm
const results = searchProject(searchTerm);

// Define the output path for the search index
const outputPath = path.join(process.cwd(), "public", "search-index.json");

// Write the results to the output file
fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));

console.log(`✅ search-index.json generated with ${results.length} entries`);
