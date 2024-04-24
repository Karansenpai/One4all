import NextAuth, { Session } from "next-auth"
import authConfig from "./auth.config"
import User from "./models/userModel";
import { connectToMongoDB } from "./lib/db";


declare module "next-auth" {
  interface Session {
    user:{
      name: string,
      id: string,
      username: string,
      email: string,
      Role: string,
      picture: string,
      section: string,
      Semester: string,
      Year: string,
      Branch: string,
      Department: string,
      RollNo: string,
      Subjects: string[],
    }
  }
}

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({

  callbacks:{
    async signIn({ user, account, profile, email, credentials }) {
      if (account?.provider === "github") {
        await connectToMongoDB();
        try {
          const user = await User.findOne({ email: profile?.email });
          if (!user) {
            const newUser = new User({
              username: profile?.login,
              email: profile?.email,
              image: profile?.avatar_url,
            });

            await newUser.save();
          }
        } catch (err) {
          console.log(err);
          return false;
        }
      }
      console.log("ACCOUNT H");

      if(account?.provider === "google"){
        await connectToMongoDB();
        try {
          const user = await User.findOne({ email: profile?.email });
          if (!user) {
            const newUser = new User({
              username: profile?.name,
              email: profile?.email,
              image: profile?.picture,
            });

            await newUser.save();
          }
        } catch (err) {
          console.log(err);
          return false;
        }
      }
      return true
    },
    async session({token,session}){
      
      if(token?.sub && session?.user){
        session.user.id = token.sub;
        session.user.Role = token.Role as string;
        session.user.username = token.username as string;
        session.user.picture = token.picture as string;
        session.user.section = token.section as string;
        session.user.Semester = token.Semester as string;
        session.user.Year = token.Year as string;
        session.user.Branch = token.Branch as string;
        session.user.Department = token.Department as string;
        session.user.RollNo = token.RollNo as string;
        session.user.Subjects = token.Subjects as string[];
      }

      return session;
    },
    async jwt({token}){

      if(!token.sub) return token;

      const existingUser = await User.findOne({email : token.email});

      if(!existingUser) return token;
      token.sub = existingUser._id.toString();
      token.Role = existingUser.Role;
      token.username = existingUser.username;
      token.picture = existingUser.avatar || "";
      token.section = existingUser.section || "";
      token.Semester = existingUser.Semester || "";
      token.Year = existingUser.Year || "";
      token.Branch = existingUser.Branch || "";
      token.Department = existingUser.Department || "";
      token.RollNo = existingUser.RollNo || "";
      token.Subjects = existingUser.Subjects || [];


      return token;
    }

  },
  ...authConfig,
  session: {strategy: "jwt"},
  
})