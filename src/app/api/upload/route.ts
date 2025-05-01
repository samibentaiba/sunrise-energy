import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_OPTIONS } from "@/config/auth";
import { ApiError, handleApiError } from "@/lib/api-error";
import { bufferToCloudinary } from "@/utils/cloudinary";

/**
 * POST: Upload an image to Cloudinary
 */
export async function POST(request: Request) {
  const session = await getServerSession(NEXT_AUTH_OPTIONS);

  if (!session || !session.user) {
    return handleApiError(new ApiError("Unauthorized", 401));
  }

  try {
    const formData = await request.formData();

    const file = formData.get("file");
    if (!file || !(file instanceof Blob)) {
      return handleApiError(new ApiError("No valid file uploaded", 400));
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const folder = formData.get("folder")?.toString() || "images";
    const name = formData.get("name")?.toString() || undefined;

    const uploadResult = await bufferToCloudinary(buffer, folder, name);

    if (!uploadResult) {
      return handleApiError(new ApiError("Image upload failed", 500));
    }

    return NextResponse.json(
      {
        secure_url: uploadResult.secure_url,
        public_id: uploadResult.publicId,
      },
      { status: 201 }
    );
  } catch (error) {
    return handleApiError(error);
  }
}
