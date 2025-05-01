import { NextResponse } from "next/server";
import prisma from "@/db";
import { handleApiError } from "@/lib/api-error";

// GET: Fetch all products
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        availableAt: "desc", // Newest first
      },
    });

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return handleApiError(error);
  }
}
