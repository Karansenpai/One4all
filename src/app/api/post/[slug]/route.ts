import { connectToMongoDB } from "@/lib/db";
import Post from "@/models/postModel";
import { request } from "https";

import { NextResponse } from "next/server";

export const GET = async (request:Request, { params }:any) => {
  const { slug } = params;

  try {
    await connectToMongoDB();

    const post = await Post.findOne({ slug });
    return NextResponse.json({error: "Hello"});
    return new Response("Get Handler");
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


export const POST = async(request: Request, {params}:any) => {

  const {slug} = params;
  console.log(slug);
  const post = await request.json();
  console.log(post);
  return NextResponse.json("new post detected")
}