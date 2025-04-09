// pages/api/search-index.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { searchProject } from "@/libs/search";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    if (req.method === "GET") {
      const { query } = req.query; // Get the search term from the query string
      if (!query || typeof query !== 'string') {
        return res.status(400).json({ error: 'Search term is required' });
      }
  
      try {
        const results = searchProject(query); // Pass the query to the search function
        res.status(200).json(results);
      } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Failed to fetch search index" });
      }
    } else {
      res.setHeader("Allow", ["GET"]);
      res.status(405).json({ error: "Method Not Allowed" });
    }
  }
  
