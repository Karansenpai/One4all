import { connectToMongoDB } from "@/lib/db";
import Post from "@/models/postModel";

import { NextResponse } from "next/server";

export const GET = async (request:Request, { params }:any) => {
  const { slug } = params;

  try {
    await connectToMongoDB();

    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const DELETE = async (request:Request, { params }:any) => {
  const { slug } = params;

  try {
    await connectToMongoDB();

    await Post.deleteOne({ slug });
    return NextResponse.json("Post deleted");
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete post!");
  }
};
