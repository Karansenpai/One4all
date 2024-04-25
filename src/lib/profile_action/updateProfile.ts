"use server"

import User from "@/models/userModel";
import { connectToMongoDB } from "../db";
import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});


export const updateProfile = async (email: string, studentId: string, department: string, section: string, imgUrl: string, sem: string) => {

    try {
        await connectToMongoDB();
        const user = await User.findOne({ email });

        if (!user) {
            return "User not found";
        }        

        if(imgUrl){
            const uploadedResponse = await cloudinary.uploader.upload(imgUrl.toString());
            imgUrl = uploadedResponse.secure_url;
        }
        user.RollNo = studentId || user.RollNo;
        user.Department = department || user.Department;
        user.section = section || user.section; 
        user.avatar = imgUrl || user?.avatar;
        user.Semester = sem || user.Semester;
        await user.save();
        return "user updated succesfully";
    }
    catch (err) {
        return "error occured while updating user profile"
    }

}