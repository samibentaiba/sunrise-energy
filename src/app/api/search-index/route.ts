// src/app/api/search-index/route.ts

import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const query = searchParams.get("query");

  if (!query || typeof query !== "string") {
    return NextResponse.json(
      { error: "Search term is required" },
      { status: 400 }
    );
  }

  try {
    const filePath = path.join(process.cwd(), "public", "search-index.json");
    const rawData = fs.readFileSync(filePath, "utf-8");
    const index = JSON.parse(rawData);

    const results = index.filter((item: { content: string }) =>
      item.content.toLowerCase().includes(query.toLowerCase())
    );

    return NextResponse.json(results);
  } catch (error) {
    console.error("Error reading search index:", error);
    return NextResponse.json(
      { error: "Failed to read search index" },
      { status: 500 }
    );
  }
}
