import { NextResponse } from "next/server";
import prisma from "@/db";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_OPTIONS } from "@/config/auth";
import { ApiError, handleApiError } from "@/lib/api-error";

export async function GET(request: Request) {
  try {
    const { pathname } = new URL(request.url);
    const idStr = pathname.split("/").pop();

    if (!idStr) throw new ApiError("Invalid product ID", 400);

    const product = await prisma.product.findUnique({
      where: { id: idStr },
      include: { images: true },
    });

    if (!product) throw new ApiError("Product not found", 404);

    return NextResponse.json({
      ...product,
      images: product.images.map((imag) => ({
        publicId: imag.publicId,
        name: imag.name,
        fullUrl: imag.fullUrl,
      })),
    });
  } catch (error) {
    return handleApiError(error);
  }
}

// DELETE: Delete a product by ID

export async function DELETE(request: Request) {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);
  if (!session || !session.user) {
    return handleApiError(new ApiError("Unauthorized", 401));
  }

  try {
    const { pathname } = new URL(request.url);
    const idStr = pathname.split("/").pop();

    if (!idStr) throw new ApiError("Invalid product ID", 400);

    const product = await prisma.product.findUnique({ where: { id: idStr } });
    if (!product) throw new ApiError("Product not found", 404);

    const deletedProduct = await prisma.product.delete({
      where: { id: idStr },
    });
    return NextResponse.json(deletedProduct, { status: 200 });
  } catch (error) {
    return handleApiError(error);
  }
}

// PUT: Update a product by ID
export async function PUT(request: Request) {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);
  if (!session || !session.user) {
    return handleApiError(new ApiError("Unauthorized", 401));
  }

  try {
    const { pathname } = new URL(request.url);
    const idStr = pathname.split("/").pop();

    if (!idStr) throw new ApiError("Invalid product ID", 400);

    const data = await request.json();

    const updatedProduct = await prisma.product.update({
      where: { id: idStr },
      data: {
        name: data.name,
        price: data.price,
        stock: data.stock,
        content: data.content,
        status: data.status,
        availableAt: data.availableAt ?? new Date(data.availableAt),
        images: {
          set: [], // Clear existing images first (if necessary)
          create:
            data.images?.map(
              (image: { publicId: string; name: string; fullUrl: string }) => ({
                publicId: image.publicId,
                fullUrl: image.fullUrl,
                name: image.name,
              })
            ) || [],
        },
      },
    });

    return NextResponse.json(updatedProduct);
  } catch (error) {
    return handleApiError(error);
  }
}
