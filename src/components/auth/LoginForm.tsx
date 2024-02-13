import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function LoginForm() {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="w-[350px] rounded-2xl bg-white p-8 shadow-lg">
        <div className="flex flex-col items-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-200">
            <PersonStandingIcon className="h-8 w-8 text-gray-600" />
          </div>
          <form className="w-full">
            <div className="mb-4">
              <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="email">
                Email ID
              </label>
              <div className="flex items-center rounded-md border px-3 py-2">
                <MailIcon className="mr-2 h-5 w-5 text-gray-400" />
                <Input id="email" placeholder="Email ID" type="email" />
              </div>
            </div>
            <div className="mb-4">
              <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="password">
                Password
              </label>
              <div className="flex items-center rounded-md border px-3 py-2">
                <LockIcon className="mr-2 h-5 w-5 text-gray-400" />
                <Input id="password" placeholder="Password" type="password" />
              </div>
            </div>
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox id="remember-me" />
                <label className="ml-2 block text-sm text-gray-600" htmlFor="remember-me">
                  Remember me
                </label>
              </div>
              <Link className="text-sm text-blue-500 hover:underline" href="#">
                Forgot Password?
              </Link>
            </div>
            <Button className="w-full">LOGIN</Button>
          </form>
        </div>
      </div>
    </div>
  )
}


function PersonStandingIcon(props:any) {
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
      <circle cx="12" cy="5" r="1" />
      <path d="m9 20 3-6 3 6" />
      <path d="m6 8 6 2 6-2" />
      <path d="M12 10v4" />
    </svg>
  )
}


function MailIcon(props:any) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function LockIcon(props:any) {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}
