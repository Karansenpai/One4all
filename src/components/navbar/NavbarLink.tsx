"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./NavbarLink.module.css";
import Sidebar from "../Sidebar/Sidebar";

const NavbarLink = () => {
  const [open, isopen] = useState(false);

  return (
    <div className="flex gap-10 ">
      <div className={style.menuLink}>

        <button
          onClick={() => {
            isopen(!open);
          }}
        >
          <Image src="/menu.png" alt="" width={25} height={25} />
        </button>

      </div>
      <Link className="flex items-center gap-2" href="/">
        <h2>One For All</h2>
      </Link>

    </div>
  );
};

export default NavbarLink;
