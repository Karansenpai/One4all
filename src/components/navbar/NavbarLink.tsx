"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./NavbarLink.module.css";
import Sidebar from "../Sidebar/Sidebar";

const NavbarLink = ({ session }: any) => {
  const [open, isopen] = useState(false);

  return (
    <div className="flex justify-around relative">
      <div className={style.menuLink}>
        <button
          onClick={() => {
            isopen(!open);
          }}
        >
          {session?.user && (
            <Image src="/menu.png" alt="" width={25} height={25} />
          )}
        </button>
      </div>
      <div>
        <Link className="flex items-center gap-2" href="/">
          <div className={style.heading}>
            <h2>One for All</h2>
          </div>
        </Link>
      </div>

      {open && <div className={style.sidebar}>Sidebar</div>}
    </div>
  );
};

export default NavbarLink;
