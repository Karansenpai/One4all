import AnnouncementsCard from "@/components/Announcementcard/AnnouncementsCard";
import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import styles from "./page.module.css";
const Announcements = () => {
  return (
    <div className=" w-full flex-row">
      <div className="flex text-lg justify-center items-center p-10 m-5 gap-5">
        <div className={styles.avatar}>
          <Image
            className={styles.img}
            src="/noavatar.png"
            width={80}
            height={80}
            alt=""
          />
        </div>
        <div>
          <Input
            className="md:w-[40rem]  w-[20rem] h-[5rem]"
            placeholder="Announce something"
          />
        </div>
        <div className="bg-[#FFFFFF] p-[9px] rounded-full">
          <Image
            src="/send.png"
            width={30}
            height={30}
            alt="
            "
          />
        </div>
      </div>
      <div>
        <AnnouncementsCard />
        <AnnouncementsCard />
        <AnnouncementsCard />
        <AnnouncementsCard />
      </div>
    </div>
  );
};

export default Announcements;
