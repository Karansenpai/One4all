import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import User from "./models/userModel";
import bcrypt from "bcryptjs";
import { connectToMongoDB } from "./lib/db";
import Github from "next-auth/providers/github";

export default {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    Credentials({
      async authorize(credentials:any) {

        const { username, password } = credentials;

        console.log("logging in");

        await connectToMongoDB();

        const user = await User.findOne({ username: username });

        if (!user) {
          return null;
        }
        
        const isPasswordCorrect = await bcrypt.compare(password, user.password || "");

        if (isPasswordCorrect) {
          return user as any;
        }
        return null;

      }
    })
  ],
} satisfies NextAuthConfig