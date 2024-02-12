"use client"
import { loginUser } from "@/actions/login";
import { signIn } from "next-auth/react";
import React from "react";

const Login = () => {

  const loginGithub = async () =>{
      await signIn("github");
  }
  return (
  <div>
      <form>
        <button onClick={loginGithub}>Click to login</button>
      </form>

      <form action={loginUser}>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button >login with credentials</button>
      </form>
    </div>
  );
};

export default Login;
