"use server"

import Post from "@/models/postModel";
import {v2 as cloudinary} from 'cloudinary';
import { connectToMongoDB } from "../db";
import { revalidatePath } from "next/cache";


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});


export const createPost = async(Formdata:FormData) => {
    var {Name,profilePic,Content, Image, selected, userId } = Object.fromEntries(Formdata);
    
    try{
        await connectToMongoDB();

        console.log(profilePic);

        const post = new Post({
            Name: Name,
            postedBy: userId,
            text: Content,
            img: Image,
            section: selected,
            profilePic: profilePic || "",
            replies: [],
        });
    
        await post.save();
        
        if(Image){
            const uploadedResponse = await cloudinary.uploader.upload(Image as string);
            Image = uploadedResponse.secure_url;
        }
        revalidatePath("/Announcements")
        return "Post created successfully!"
    } catch(err){
        return err;
    }

}