"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { handleGithubLogin, loginUser } from "@/actions/login"

export default function LoginForm() {

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    }}>
    <form className="mx-auto max-w-md space-y-8" action={loginUser}>
      <div className="space-y-2 text-center">

        <p>Enter your information to get started</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="full-name">Username</Label>
          <Input id="username" name="username" placeholder="Enter your username" required />
        </div>
        <div className="relative space-y-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input id="password" name="password"  required type="password" placeholder="Enter password"/>
        </div>
        <Button className="w-full">
          Log in
        </Button>
      </div>
    </form>
    <form action={handleGithubLogin}>
    <Button className="w-full dark:bg-gray-800 dark:text-gray-50 gap-4" variant="outline">
      Sign in with GitHub
      <GithubIcon className="h-6 w-6" />
    </Button>
    </form>
    </div>
  )
}



function GithubIcon(props:any) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}
