import AnnouncementsCard from "@/components/Announcementcard/AnnouncementsCard";
import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const Announcements = () => {
  return (
    <div className=" w-full flex-row">
      <div className="flex text-lg justify-center p-10 m-5 gap-5">
        <div>
          <Avatar className="w-[40px] h-[40px]">
            <AvatarImage src="/noavatar.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <Input
            className="md:w-[40rem]  w-[20rem] h-[5rem]"
            placeholder="Announce something"
          />
        </div>
        <div>
          <Image
            className="filter invert"
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
