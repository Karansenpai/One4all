import authConfig from "@/auth.config";
import NextAuth from "next-auth";

import  {
    DEFAULT_LOGIN_REDIRECT,
    publicRoutes,
    authRoutes,
    apiAuthPrefix,
} from "@/route";


const {auth} = NextAuth(authConfig)
export default auth( async(req) => {



    const {nextUrl} = req;
    const isLoggedIn = !!req.auth;

    // const isLoggedIn = true;
    // console.log(req.auth, nextUrl.pathname, isLoggedIn, "middleware");
    // console.log(req.auth);
    //don't have anything to do in this
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if(isApiAuthRoute){
        return null;
    }

    if(isAuthRoute){

        if(isLoggedIn){
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
        }
        return null;
    }
    
    if(!isLoggedIn && !isPublicRoute){
        return Response.redirect(new URL("/auth/login", nextUrl));
    }
    return null;
})

// Optionally, don't invoke Middleware on some paths
export const config = {
    //   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}