import path from "path";
import fs from "fs";
import { searchProject } from "../libs/search";
const results = searchProject(""); // Or pass "" or "*" to build full index
const outputPath = path.join(process.cwd(), "public", "search-index.json");
fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));

console.log(`✅ search-index.json generated with ${results.length} entries`);
