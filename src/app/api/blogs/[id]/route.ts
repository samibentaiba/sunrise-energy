import { NextResponse } from "next/server";
import prisma from "@/db";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_OPTIONS } from "@/config/auth";
import { ApiError, handleApiError } from "@/lib/api-error";

export async function GET(request: Request) {
  try {
    const { pathname } = new URL(request.url);
    const idStr = pathname.split("/").pop();

    if (!idStr) throw new ApiError("Invalid blog ID", 400);

    const blog = await prisma.blog.findUnique({
      where: { id: idStr },
      include: { images: true }, // 👈 make sure images are fetched too
    });

    if (!blog) throw new ApiError("Blog not found", 404);

    return NextResponse.json({
      ...blog,
      images: blog.images.map((img) => ({
        publicId: img.publicId,
        name: img.name,
        fullUrl: img.fullUrl, // 👈 make sure it's included
      })),
    });
  } catch (error) {
    return handleApiError(error);
  }
}

// DELETE: Delete a blog by ID

export async function DELETE(request: Request) {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);
  if (!session || !session.user) {
    return handleApiError(new ApiError("Unauthorized", 401));
  }

  try {
    const { pathname } = new URL(request.url);
    const idStr = pathname.split("/").pop();

    if (!idStr) throw new ApiError("Invalid blog ID", 400);

    const blog = await prisma.blog.findUnique({ where: { id: idStr } });
    if (!blog) throw new ApiError("Blog not found", 404);

    const deletedBlog = await prisma.blog.delete({ where: { id: idStr } });
    return NextResponse.json(deletedBlog, { status: 200 });
  } catch (error) {
    return handleApiError(error);
  }
}

// PUT: Update a blog by ID
export async function PUT(request: Request) {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);
  if (!session || !session.user) {
    return handleApiError(new ApiError("Unauthorized", 401));
  }

  try {
    const { pathname } = new URL(request.url);
    const idStr = pathname.split("/").pop();

    if (!idStr) throw new ApiError("Invalid blog ID", 400);

    const data = await request.json();

    // Map the images to CloudImage objects (if they exist)
    const updatedBlog = await prisma.blog.update({
      where: { id: idStr },
      data: {
        title: data.title,
        content: data.content,
        status: data.status,
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

    return NextResponse.json(updatedBlog);
  } catch (error) {
    return handleApiError(error);
  }
}
