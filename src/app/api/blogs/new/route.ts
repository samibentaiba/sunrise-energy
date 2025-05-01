import { NextResponse } from "next/server";
import prisma from "@/db";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_OPTIONS } from "@/config/auth";
import { ApiError, handleApiError } from "@/lib/api-error";


// POST: Create a new blog

export async function POST(request: Request) {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);
  if (!session || !session.user) {
    return handleApiError(new ApiError("Unauthorized", 401));
  }

  try {
    const data = await request.json();

    const newBlog = await prisma.blog.create({
      data: {
        title: data.title,
        content: data.content,
        status: data.status,
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
      },
    });

    return NextResponse.json(newBlog);
  } catch (error) {
    return handleApiError(error);
  }
}
