

import { connectToMongoDB } from "@/lib/db";
import Post from "@/models/postModel";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  try {
    await connectToMongoDB();

    const posts = await Post.find().sort({ createdAt: -1 });
    return NextResponse.json(posts);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};
