// src/app/api/search-index/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { searchProject } from '@/libs/search';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const query = searchParams.get('query');

  if (!query || typeof query !== 'string') {
    return NextResponse.json({ error: 'Search term is required' }, { status: 400 });
  }

  try {
    const results = searchProject(query); // Pass the query to the search function
    return NextResponse.json(results);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to fetch search index' }, { status: 500 });
  }
}
