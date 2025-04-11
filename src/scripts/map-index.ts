// scripts/generateComponentMap.ts
import fs from "fs";
import path from "path";

const outPath = path.resolve("src/data/componentMap.ts");

interface SearchIndexEntry {
  path: string;
  content: string;
}

const rawData = fs.readFileSync(
  path.resolve("public/search-index.json"),
  "utf-8"
);
const entries: SearchIndexEntry[] = JSON.parse(rawData);

const uniquePaths = Array.from(
  new Set(
    entries
      .map((entry) => entry.path)
      .filter((p) => p.endsWith(".tsx"))
      .map((p) => p.replace(/^src\//, "").replace(/\.tsx$/, ""))
  )
).sort();

const componentMap = `
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import type { ComponentType } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const componentMap: Record<string, () => Promise<{ default: ComponentType<any> }>> = {
${uniquePaths.map((p) => `  "${p}": () => import("@/${p}")`).join(",\n")}
};
`;

fs.writeFileSync(outPath, componentMap, "utf-8");

console.log(
  `✅ componentMap generated with ${uniquePaths.length} entries at ${outPath}`
);
