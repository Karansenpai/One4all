"use server"

import User from "@/models/userModel";
import { connectToMongoDB } from "../db";

export const updateProfile = async(email:string,studentId:string,department:string,section:string) => {

    try{
        await connectToMongoDB();
        const user = await User.findOne({email});
        if(!user){
            return "User not found";
        }
        user.RollNo = studentId;
        user.Department = department;
        user.section = section;
        await user.save();

        return "user updated succesfully";
    }
    catch(err){
        return err;
    }

}