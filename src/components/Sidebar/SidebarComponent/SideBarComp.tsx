"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../../ui/button";
import styles from "./sidebar.module.css";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { Session } from "inspector";
const SideBarComp = () => {
  const { data: session, status } = useSession();
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <div className={styles.imgCnt}>
          <Image
            src="/noavatar.png"
            className={`${styles.avatar} `}
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className={styles.detail}>
          <h2>{session?.user?.name}</h2>
          <h3>{session?.user?.Role}</h3>
          {session?.user?.Role === "Student" && <h3>Sec {session?.user?.section}</h3>}
          <p>Btech IT</p>
        </div>
      </div>
      <div className={styles.sideitems}>
        <Link
          className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900
"
          href="/Announcements"
        >
          Announcements
        </Link>
        <Link
          className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          href="/settings"
        >
          Settings
        </Link>
        <Link
          className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          href="/settings"
        >
          Announcements
        </Link>
      </div>
    </div>
  );
};

export default SideBarComp;
