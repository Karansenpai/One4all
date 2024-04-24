"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { handleRegisterUser } from "@/lib/auth_actions/Register";
export default function Component() {
  const [Role, setRole] = useState<string>("");

  const check = async (FormData: FormData) => {
    const res = await handleRegisterUser(FormData, Role);

    if (res?.error) {
      alert(res.error);
    }

    if (res.success) {
      alert("User created successfully");
    }
  };
  return (
    <form
      className="mx-auto mt-[200px] max-w-md space-y-8 sm:space-y-10"
      action={check}
    >
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">Create an Account</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your information to get started
        </p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="username">Full Name</Label>
          <Input
            id="username"
            name="username"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="m@example.com"
            required
            type="email"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="role">Role</Label>
          <Select onValueChange={setRole}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Student">Student</SelectItem>
              <SelectItem value="Admin">Admin</SelectItem>
              <SelectItem value="faculty">Faculty</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="relative space-y-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input id="password" name="password" required type="password" />
          <Button
            className="absolute bottom-1 right-1 h-7 w-7"
            size="icon"
            variant="ghost"
          >
            <EyeIcon className="h-4 w-4" />
            <span className="sr-only">Toggle password visibility</span>
          </Button>
        </div>
        <div className="relative space-y-2">
          <div className="flex items-center">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
          </div>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            required
            type="password"
          />
          <Button
            className="absolute bottom-1 right-1 h-7 w-7"
            size="icon"
            variant="ghost"
          >
            <EyeIcon className="h-4 w-4" />
            <span className="sr-only">Toggle password visibility</span>
          </Button>
        </div>
        <Button className="w-full" type="submit">
          Sign Up
        </Button>
      </div>
    </form>
  );
}

function EyeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
