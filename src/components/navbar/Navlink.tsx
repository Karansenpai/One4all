"use client";

import React from "react";
import { Button } from "../ui/button";
import { logout } from "@/lib/auth_actions/logout";
import { useRouter } from "next/navigation";

const Navlink = ({ session }: any) => {
  const router = useRouter();
  return (
    <div className="flex items-center gap-4 ">
      {!session?.user ? (
        <>
          <Button
            onClick={() => {
              router.push("/auth/login");
            }}
          >
            Sign In
          </Button>
          <Button
            onClick={() => {
              router.push("/auth/register");
            }}
          >
            Sign Up
          </Button>
        </>
      ) : (
        <>
          <form action={logout}>
            <Button>Log out</Button>
          </form>
          <Button onClick={()=>{
            router.push("/home")
          }}>{session.user.Role}</Button>
        </>
      )}
      
    </div>
  );
};

export default Navlink;
