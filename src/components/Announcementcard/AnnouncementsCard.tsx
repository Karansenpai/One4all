import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import styles from "./acc.module.css";
import { deletePost } from "@/lib/post_actions/deletePost";
import { toast, useToast } from "../ui/use-toast";
import { Button } from "../ui/button";

const AnnouncementsCard = ({ post }: any) => {
  const [open, setopen] = React.useState(false);
  const { toast } = useToast();
  return (
    <div className="w-[100%] min-h-[35%] flex justify-center text-lg my-5 p-2 rounded-lg">
      <div className="w-[70%] h-full gap-2 rounded-lg bg-slate-700 p-6">
        <div className="flex gap-24 w-full m-3 justify-between px-5">
          <div className="flex ">
            <div className={styles.avatar}>
              <Image
                className={styles.img}
                src={post.profilePic ? post.profilePic : "/noavatar.png"}
                width={50}
                height={50}
                alt=""
              />
            </div>
            <div className="flex-row px-7 ">
              <div>{post.Name}</div>
              <div>{post.updatedAt.toDateString()}</div>
            </div>
          </div>
          <div className="self-end">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Image src="/menu1.png" width={30} height={30} alt="" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Options</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Edit Post</DropdownMenuItem>
                <DropdownMenuItem
                  onClick={async () => {
                    await deletePost(post._id);
                    toast({
                      variant: "destructive",
                      title: "Deleted!",
                      description: "Post Deteted Succesfully!",
                      duration: 5000,
                    });
                  }}
                >
                  Delete Post
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="m-3 p-3 text-justify">
          <p>{post.text}</p>
        </div>

        {post.img && (
          <div className="m-3 p-3">
              <Image onClick = {()=>{
                setopen(!open)
              }} src={post.img} width={500} height={500} alt="" />
            {open && (
              <div className = "fixed top-[100px] left-[250px] ">
                <Image onClick={()=>{
                  setopen(!open)
                }} src={post.img} width={1400} height={1360} alt="" />
              </div>
            )}
          </div>
        )}

        <div className="m-3 p-3 px-[20px] w-[100%]">
          <div className="flex justify-between gap-3 items-center ">
            <div className="flex gap-6 items-center">
              <div className={styles.avatar}>
                <Image
                  className={styles.img}
                  src="/noavatar.png"
                  width={50}
                  height={50}
                  alt=""
                />
              </div>
              <Input
                className="items-center h-10  lg:w-[32em] "
                type="text"
                placeholder="Add Comment"
              />
            </div>
            <div className={`${styles.avatar} bg-[#FFFFFF] `}>
              <Image
                className={`${styles.img} `}
                src="/send.png"
                width={30}
                height={30}
                alt="
            "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsCard;
