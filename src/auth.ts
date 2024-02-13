import NextAuth, { Session } from "next-auth"
import authConfig from "./auth.config"
import User from "./models/userModel";
import { connectToMongoDB } from "./lib/db";


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
      return true
    },
    async session({token,session}){

      if(token.sub && session.user){
        session.user.id = token.sub;
        //@ts-ignore
        session.user.isAdmin = token.isAdmin;
         //@ts-ignore 
        session.user.username = token.username;
      }

      return session;
    },
    async jwt({token}){

      if(!token.sub) return token;

      const existingUser = await User.findOne({email : token.email});

      if(!existingUser) return token;

      token.isAdmin = existingUser.isAdmin;
      token.username = existingUser.username;
      token.picture = existingUser.avatar || "";

      token.isAdmin = false;

      return token;
    }

  },
  session: {strategy: "jwt"},
  ...authConfig,
})