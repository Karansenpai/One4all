import Link from "next/link";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "../ModeToggle";
import Navlink from "./Navlink";
import { auth } from "@/auth";

export async function Navbar() {
  const session = await auth();
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <div className="flex gap-8">
        <Link className="flex items-center gap-2" href="/">
          <span>
            <b>One4all</b>
          </span>
        </Link>
        <div className="relative">
          <Input
            className="pl-8 sm:w-[300px] md:w-[400px] lg:w-[500px] py-2 pr-4 text-sm rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 "
            placeholder="Search..."
            type="search"
          />
          <SearchIcon className="absolute right-2.5 top-2.5 h-4 w-4" />
        </div>
      </div>

      <div className="flex gap-7">
        <Navlink session={session} />
        <ModeToggle />
      </div>
    </div>
  );
}

function SearchIcon(props: any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
