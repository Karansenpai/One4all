"use server";

import Post from "@/models/postModel";
import { connectToMongoDB } from "../db";

import { IPostDocument } from "@/models/postModel";
import { revalidatePath } from "next/cache";

var posts: IPostDocument[] = [];
export const getPost = async (id: string) => {
  try {
    await connectToMongoDB();
    const post = await Post.findById(id).select("-replies");
    return post;
  } catch (err) {
    return err;
  }
};

export const getReplies = async (id: string) => {

    await connectToMongoDB();
    const post = await Post.findById(id);
    const replies = post?.replies || [];
    var Reply : any = [];
    replies.map((reply) => {
      Reply.push({
        userId: reply.userId,
        text: reply.text,
        userProfilePic: reply.userProfilePic,
        username: reply.username,
      });
    });
    return Reply;
  
};
export const getAllPost = async () => {
  try {
    await connectToMongoDB();
    posts = await Post.find().select("-replies");
    revalidatePath("/Announcements");
    console.log(posts);
    return posts;
  } catch (err) {
    return err;
  }
};
