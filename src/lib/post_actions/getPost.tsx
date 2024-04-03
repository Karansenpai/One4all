"use server"

import Post from "@/models/postModel";
import { connectToMongoDB } from "../db";

import { IPostDocument } from "@/models/postModel";
import { revalidatePath } from "next/cache";

var posts: IPostDocument[] = [];
export const getPost = async (id: string) => {
    try{
        await connectToMongoDB();
        const post = await Post.findById(id);
        return post;
    }
    catch(err){
        return err;
    }
}

export const getAllPost = async() =>{
    try{
        await connectToMongoDB();
        posts = await Post.find();
        revalidatePath("/Announcements")
        return posts;
    } catch(err){
        return err;
    }
}