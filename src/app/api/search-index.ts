// pages/api/search-index.ts
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { query } = req.query;

    if (!query || typeof query !== "string") {
      return res.status(400).json({ error: "Search term is required" });
    }

    try {
      const filePath = path.join(process.cwd(), "public", "search-index.json");
      const rawData = fs.readFileSync(filePath, "utf-8");
      const index = JSON.parse(rawData);

      const results = index.filter((item: { content: string }) =>
        item.content.toLowerCase().includes(query.toLowerCase())
      );

      res.status(200).json(results);
    } catch (error) {
      console.error("Error reading search index:", error);
      res.status(500).json({ error: "Failed to read search index" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
