"use server"

import Post from "@/models/postModel";
import { connectToMongoDB } from "../db";

export const deletePost = async (id: string) => {
    try{
        await connectToMongoDB();
        const post = await Post.findByIdAndDelete(id);
        return post;
    }
    catch(err){
        return err;
    }
};