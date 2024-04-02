"use client";

import AnnouncementsCard from "@/components/Announcementcard/AnnouncementsCard";
import React from "react";
import Image from "next/image";
import { useRef } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import usePreviewImage from "@/hooks/usePreviewimage";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { createPost } from "@/lib/post_actions/createPost";

const Announcements = () => {
  const { data: session, status } = useSession();

  console.log(session);

  const [input, setInput] = React.useState("");
  const [selected, setSelected] = React.useState("All");
  const { handleImageChange, imgUrl, setImgUrl } = usePreviewImage();
  const imageRef = useRef<HTMLInputElement>(null);

  
  const handleCreatePost = async() => {
    const formData = new FormData();
    formData.append("Author", session?.user?.name || "");
    formData.append("Date", new Date().toDateString());
    formData.append("Content", input);
    formData.append("Image", imgUrl as string);
    formData.append("selected", selected);
    await createPost(formData);
  };


  return (
    <div className=" w-full flex-row">
      <div className="flex text-lg justify-center items-center p-10 m-5 gap-5 ">
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
            className="lg:w-[20rem]  w-[10rem] h-[5rem]"
            placeholder="Announce something"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="items-center gap-1.5">
          <Label htmlFor="picture">Picture</Label>
          <Input
            ref={imageRef}
            onChange={handleImageChange}
            id="picture"
            type="file"
          />
        </div>
        <div className="p-[9px] rounded-full">
          <DropdownMenu>
            <DropdownMenuTrigger>Send To {selected}</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  setSelected("All");
                }}
              >
                All
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setSelected("A");
                }}
              >
                SecA
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setSelected("B");
                }}
              >
                SecB
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setSelected("C");
                }}
              >
                SecC
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setSelected("D");
                }}
              >
                SecD
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="bg-[#FFFFFF] p-[9px] rounded-full">
          <button onClick={handleCreatePost}>
            <Image src="/send.png" width={30} height={30} alt="" />
          </button>
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
