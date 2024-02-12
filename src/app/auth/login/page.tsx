"use client"

// import { handleGithubLogin, loginUser } from "@/lib/action";
// import { auth, signIn, signOut } from "@/lib/auth";
import React from "react";

const Login = async () => {


  // const session = await auth();
  // console.log("session from login",session);

  return (
  <div>
      <form >
        <button>Click to login</button>
      </form>

      <form>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button >login with credentials</button>
      </form>
    </div>
  );
};

export default Login;
