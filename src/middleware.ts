import { auth } from "./auth"

export default auth((req) => {
    console.log("ROUTE: ", req.nextUrl.pathname);
})

// Optionally, don't invoke Middleware on some paths
export const config = {
    //   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}