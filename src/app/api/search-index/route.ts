// src/app/api/search-index/route.ts

import { NextResponse } from 'next/server';
import { searchProject } from '@/libs/search'; // ✅ Adjust import path as needed

export async function GET() {
  try {
    const results = searchProject();
    return NextResponse.json(results);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to fetch search index' }, { status: 500 });
  }
}
