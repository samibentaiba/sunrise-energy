// app/api/verify-reset-token/route.ts
import prisma from "@/db";
import { NextResponse } from "next/server";
import crypto from "crypto";
import { ApiError, handleApiError } from "@/lib/api-error";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    if (!token) {
      throw new ApiError("Token is required.", 400);
    }

    // Hash token to match stored hash
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    // Cleanup expired tokens
    await prisma.passwordResetToken.deleteMany({
      where: {
        expiresAt: {
          lt: new Date(),
        },
      },
    });

    // Find token entry
    const tokenEntry = await prisma.passwordResetToken.findUnique({
      where: { token: hashedToken },
      include: { user: true },
    });

    if (!tokenEntry || tokenEntry.expiresAt < new Date()) {
      throw new ApiError("Token is invalid or expired.", 400);
    }

    return NextResponse.json({
      success: true,
      userId: tokenEntry.userId,
    });

  } catch (error) {
    return handleApiError(error);
  }
}
