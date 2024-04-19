import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import User from "./models/userModel";
import bcrypt from "bcryptjs";
import { connectToMongoDB } from "./lib/db";
import Github from "next-auth/providers/github";
import GoogleProivder from "next-auth/providers/google";
export default {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    GoogleProivder({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials:any) {

        const { username, password } = credentials;

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