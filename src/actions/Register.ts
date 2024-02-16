"use server"

import { connectToMongoDB } from "@/lib/db";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";

export const handleRegisterUser = async(FormData: FormData, Role: string) =>{
    
    try{
        const {username,email,password,confirmPassword} = Object.fromEntries(FormData);
    
        if(password !== confirmPassword){
          return {error:"Passwords do not match"}
        }
        await connectToMongoDB();
    
        const user = await User.findOne({email: email});
    
        if(user){
            return {error:"User already exists"}
        }
    
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password as string, salt);
    
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            Role
        });
    
        await newUser.save();
        console.log("saved to db");
    
        return { success: true };

    } catch(err){
        return {error:(err as Error).message}
    }
    

  }