import { NextResponse } from "next/server";
import prisma from "@/db";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_OPTIONS } from "@/config/auth";
import { ApiError, handleApiError } from "@/lib/api-error";

// POST: Create a new product
export async function POST(request: Request) {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);
  if (!session || !session.user) {
    return handleApiError(new ApiError("Unauthorized", 401));
  }

  try {
    const data = await request.json();

    const newProduct = await prisma.product.create({
      data: {
        name: data.name,
        price: data.price,
        content: data.content,
        stock: data.stock,
        status: data.status ?? "active",
        images: {
          create:
            data.images?.map(
              (image: { publicId: string; name: string; fullUrl: string }) => ({
                publicId: image.publicId,
                fullUrl: image.fullUrl,
                name: image.name,
              })
            ) || [],
        },
        availableAt: new Date(data.availableAt),
      },
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}
