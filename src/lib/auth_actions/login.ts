"use server"

import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";
import { AuthError } from "next-auth";

export const handleGoogleLogin = async () =>{
    await signIn("google");
}

export const handleGithubLogin = async () =>{
    await signIn("github");
}

export const loginUser = async(Formdata:FormData) => {
    const { username,password} = Object.fromEntries(Formdata);

    try{
        await signIn("credentials",{
            username,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })

    }
    catch(error){
        if(error instanceof AuthError){
            switch (error.type){
                case "CredentialsSignin":
                    return {error: "Invalid credentials"}
                default:
                    return {error: "An error occurred"}
            }
        }

        throw error;
    }

}