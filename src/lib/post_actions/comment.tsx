"use server"

import Post from "@/models/postModel";
import { connectToMongoDB } from "../db";
import User from "@/models/userModel";


export default async function handleReplies (comment: string, post_id: string, userEmail: string){
    try{
        await connectToMongoDB();
        const post = await Post.findById(post_id);
        if(post){

            const user = await User.findOne({email: userEmail});
            if(user){
                const userProfilePic = user?.avatar as string;
                const username = user?.username;
                const userId = user?._id;
                post?.replies.push({userId,text:comment, userProfilePic, username});
                await post?.save();
                return "Comment Added Successfully!";
            }
            else{
                return "User not found!";
            }
        }
        else{
            return "No post found!"
        }
    }
    catch(err){
        return err;
    }

}