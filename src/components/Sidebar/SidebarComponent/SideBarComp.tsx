"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./sidebar.module.css";
import { useSession } from "next-auth/react";

const SideBarComp = () => {
  const { data: session, status } = useSession();
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <div className={styles.imgCnt}>
          {session?.user?.picture && (
            <Image
              src={session?.user?.picture}
              className={`${styles.avatar} `}
              alt=""
              width={100}
              height={100}
            />
          )}
          {!session?.user?.picture && (
            <Image
              src="/noavatar.png"
              className={`${styles.avatar} `}
              alt=""
              width={100}
              height={100}
            />
          )}
        </div>
        <div className={styles.detail}>
          <h2>{session?.user?.username}</h2>
          <h3>{session?.user?.Role}</h3>
          {session?.user?.Role === "Student" && (
            <h3>Sec {session?.user?.section}</h3>
          )}
          <h3>{session?.user?.Department}</h3>
        </div>
      </div>
      <div className={styles.sideitems}>
        {session?.user?.Role === "Student" && (
          <Link
            className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            href="/home"
          >
            DashBoard
          </Link>
        )}
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
          href="/studymaterial"
        >
          Study Material
        </Link>

        {session?.user?.Role === "faculty" && (
          <Link
            className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            href="/Attendance"
          >
            Attendance
          </Link>
        )}

        {session?.user?.Role === "Student" && (
          <Link
            className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            href="/StudentCourse"
          >
            Courses
          </Link>
        )}

        <Link
          className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          href="/Courses"
        >
          All Courses
        </Link>


        {session?.user?.Role === "faculty" && (
          <Link
            className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            href="/cgpa"
          >
            Cgpa
          </Link>
        )}
      </div>
    </div>
  );
};

export default SideBarComp;
