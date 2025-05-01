import { NextResponse } from "next/server";
import prisma from "@/db";
import { handleApiError } from "@/lib/api-error";

// GET: Fetch all blogs
export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: {
        publishedAt: "desc", // Optional: Order by published date
      },
    });
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    return handleApiError(error);
  }
}
