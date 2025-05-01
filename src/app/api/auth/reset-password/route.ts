// src/app/api/auth/reset-password/route.ts
import { NextRequest } from 'next/server';
import prisma from '@/db';
import { createHash } from '@/lib/hash';
import crypto from 'crypto';
import { ApiError, handleApiError } from '@/lib/api-error';

export async function POST(req: NextRequest) {
  try {
    const { token, newPassword } = await req.json();

    if (!token || !newPassword) {
      throw new ApiError('Missing token or new password.', 400);
    }

    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

    // Cleanup expired tokens
    await prisma.passwordResetToken.deleteMany({
      where: { expiresAt: { lt: new Date() } },
    });

    const tokenEntry = await prisma.passwordResetToken.findUnique({
      where: { token: hashedToken },
      include: { user: true },
    });

    if (!tokenEntry || tokenEntry.expiresAt < new Date()) {
      throw new ApiError('Invalid or expired token.', 400);
    }

    const hashedPassword = await createHash(newPassword);

    // Update user's password
    await prisma.user.update({
      where: { id: tokenEntry.userId },
      data: { password: hashedPassword },
    });

    // Delete used token
    await prisma.passwordResetToken.delete({
      where: { token: hashedToken },
    });

    return new Response(JSON.stringify({ message: 'Password reset successful.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return handleApiError(error);
  }
}
