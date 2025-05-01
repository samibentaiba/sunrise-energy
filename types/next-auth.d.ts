// types/next-auth.d.ts
import NextAuth, { DefaultSession, DefaultUser, JWT } from "next-auth";

// Extend the default `User` type from NextAuth
declare module "next-auth" {
  interface User extends DefaultUser {
    theme: string;  // Add the `theme` property to User
  }

  interface Session extends DefaultSession {
    user: User;
  }

  interface JWT extends DefaultJWT {
    theme?: string;  // Add the `theme` property to JWT token
  }
}
