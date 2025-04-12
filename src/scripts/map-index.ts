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
    const localPath = path.resolve("src", p.replace(/^src\//, ""));
    return hasDefaultExport(localPath);
  })
  .map((p) =>
    p
      .replace(/^src\//, "") // remove src/
      .replace(/\.tsx$/, "") // remove .tsx
  )
  .sort();

const componentMap = `
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
