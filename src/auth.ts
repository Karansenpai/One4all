import NextAuth, { Session } from "next-auth"
import authConfig from "./auth.config"
import User from "./models/userModel";


export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  callbacks:{
    async session({token,session}){
      
      console.log(token);
      if(token.sub && session.user){
        session.user.id = token.sub;
        session.user.isAdmin = token.isAdmin; 
        session.user.username = token.username;
      }

      return session;
    },
    async jwt({token}){

      if(!token.sub) return token;

      const existingUser = await User.findById(token.sub);

      if(!existingUser) return token;

      token.isAdmin = existingUser.isAdmin;
      token.username = existingUser.username;
      token.picture = existingUser.avatar || "";


      return token;
    }

  },
  session: {strategy: "jwt"},
  ...authConfig,
})