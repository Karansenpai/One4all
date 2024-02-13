"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function RegisterForm() {
  return (
    <form className="mx-auto max-w-md space-y-8" onSubmit={undefined}>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Create an Account</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your information to get started</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="full-name">Full Name</Label>
          <Input id="full-name" name="full-name" placeholder="John Doe" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email"  placeholder="m@example.com" required type="email" />
        </div>
        <div className="relative space-y-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input id="password" name="password"  required type="password" />
          <Button className="absolute bottom-1 right-1 h-7 w-7" size="icon" variant="ghost">
            <EyeIcon className="h-4 w-4" />
            <span className="sr-only">Toggle password visibility</span>
          </Button>
        </div>
        <div className="relative space-y-2">
          <div className="flex items-center">
            <Label htmlFor="confirm-password">Confirm Password</Label>
          </div>
          <Input id="confirm-password" name="confirm-password" required type="password" />
          <Button className="absolute bottom-1 right-1 h-7 w-7" size="icon" variant="ghost">
            <EyeIcon className="h-4 w-4" />
            <span className="sr-only">Toggle password visibility</span>
          </Button>
        </div>
        <Button className="w-full" type="submit">
          Sign Up
        </Button>
      </div>
    </form>
  )
}

function EyeIcon(props:any) {
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
  )
}
