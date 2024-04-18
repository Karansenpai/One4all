"use server"

import User from "@/models/userModel";
import { connectToMongoDB } from "../db";
import {v2 as cloudinary} from "cloudinary";
export const updateProfile = async(email:string,studentId:string,department:string,section:string, imgUrl:string) => {

    try{

        console.log(email,studentId,department,section,imgUrl)
        await connectToMongoDB();
        const user = await User.findOne({email});
        if(!user){
            return "User not found";
        }
        if(imgUrl.length > 0){
            if(user.avatar){
                await cloudinary.uploader.destroy(user.avatar.split("/").pop()?.split(".")[0] || "");
            }
            const uploadedResponse = await cloudinary.uploader.upload(imgUrl);
            imgUrl = uploadedResponse.secure_url;
        }
        user.RollNo = studentId;
        user.Department = department;
        user.section = section;
        user.avatar = imgUrl;
        await user.save();
        return "user updated succesfully";
    }
    catch(err){
        return err;
    }

}