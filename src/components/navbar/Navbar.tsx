import Link from "next/link";

import { ModeToggle } from "../ModeToggle";
import Navlink from "./Navlink";
import { auth } from "@/auth";
import Image from "next/image";
import NavbarLink from "./NavbarLink";

export async function Navbar() {
  const session = await auth();

  return (
    <div className="dark:bg-[#121E31] bg-[#FFFFFF] flex items-center justify-between px-10 py-5 h-[10%] w-[100%] ">
      <div>
        <NavbarLink session={session} />
      </div>
      <div className="flex gap-7">
        <Navlink session={session} />
        <ModeToggle />
      </div>
    </div>
  );
}
