import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "./auth.config";
import db from "./lib/prisma";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

const adapter = PrismaAdapter(db);

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter,
  session: { strategy: "jwt" },
  ...authConfig
});
