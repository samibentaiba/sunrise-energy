import CredentialsProvider from "next-auth/providers/credentials";
import { validatePassword } from "../lib/hash";
import { AuthOptions } from "next-auth";
import prisma from "@/db";
// import GoogleProvider from "next-auth/providers/google";
// import GitHubProvider from "next-auth/providers/github";
// import { createHash } from "./hash";
// import { generateRandomString } from "./random";

export const NEXT_AUTH_OPTIONS: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "john@gmail.com" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined
      ) {
        const email = credentials?.email;
        const password = credentials?.password;

        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        if (!user) return null;
        if (password === undefined) return null;
        const isPasswordValid = await validatePassword(password, user.password);
        if (!isPasswordValid) return null;

        return {
          id: user.id,
          name: user.username,
          email: user.email,
          theme: user.theme,
        };
      },
    }),
    /*       GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
      }),
      GitHubProvider({
        clientId: process.env.GITHUB_ID || "",
        clientSecret: process.env.GITHUB_SECRET || ""
      }) */
  ],
  /*     callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
        if (account?.provider === "google" || account?.provider === "github") {
          const emailValue = user.email || "";

          let userInDb = await prisma.user.findUnique({
            where: {
              email: emailValue
            }
          })

          console.log(userInDb)

          if (!userInDb) {
            const randomPwdHash = await createHash(generateRandomString(20));

            userInDb = await prisma.user.create({
              data: {
                email: emailValue,
                username: user.name || generateRandomString(15),
                password: randomPwdHash,
                theme: 'system'
              }
            })

            console.log(userInDb);
          }

          user.id = userInDb.id;
        }
        return true
      },
      jwt: ({ token, user }: any) => {
        if (user) {
          token.userId = user.id;
        }
        return token;
      },
      session: ({ session, token, user }: any) => {
        if (session.user) {
          session.user.id = token.userId;
        }
        return session;
      },
    }, */
    
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // Add user.theme to the JWT token
    async jwt({ token, user }) {
      if (user) {
        token.userId = user.id;
        token.theme = user.theme as string;  // Add theme to JWT token
      }
      return token;
    },
    // Add user.theme to the session object
    async session({ session, token }) {
      if (session.user) {
        session.user.theme = token.theme as string;  // Add theme to session object
      }
      return session;
    },
  },
  pages: {
    signIn: "/admin/signin",
  },
};
