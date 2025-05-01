import { NEXT_AUTH_OPTIONS } from "@/config/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "@/db";
import bcrypt from "bcryptjs";
import { ApiError, handleApiError } from "@/lib/api-error";
import type { User } from "@prisma/client";

export async function GET() {
  try {
    const session = await getServerSession(NEXT_AUTH_OPTIONS);
    if (!session || !session.user) {
      throw new ApiError("No user logged in!", 401);
    }
    return NextResponse.json({
      session,
    });
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(NEXT_AUTH_OPTIONS);
    if (!session || !session.user) {
      throw new ApiError("Not authenticated", 401);
    }

    const body = await req.json();
    const { theme, email, password } = body;

    const dataToUpdate: Partial<Pick<User, "email" | "password" | "theme">> =
      {}; // <- fixed typing

    if (theme && ["light", "dark", "system"].includes(theme)) {
      dataToUpdate.theme = theme as User["theme"];
    }

    if (email && typeof email === "string" && email.includes("@")) {
      dataToUpdate.email = email.toLowerCase();
    }

    if (password && typeof password === "string" && password.length >= 6) {
      const hashedPassword = await bcrypt.hash(password, 10);
      dataToUpdate.password = hashedPassword;
    }

    if (Object.keys(dataToUpdate).length === 0) {
      throw new ApiError("No valid fields to update", 400);
    }

    const updatedUser = await prisma.user.update({
      where: { email: session.user.email! },
      data: dataToUpdate,
    });

    return NextResponse.json({ message: "User updated", user: updatedUser });
  } catch (error) {
    return handleApiError(error);
  }
}
