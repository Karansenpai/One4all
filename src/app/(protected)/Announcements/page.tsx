"use client";

import AnnouncementsCard from "@/components/Announcementcard/AnnouncementsCard";
import React, { useEffect } from "react";
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
import { useToast } from "@/components/ui/use-toast";
import { IPostDocument } from "@/models/postModel";
import { getAllPost } from "@/lib/post_actions/getPost";

const Announcements = () => {
  const { toast } = useToast();
  const { data: session, status } = useSession();
  const [input, setInput] = React.useState("");
  const [selected, setSelected] = React.useState("All");
  const { handleImageChange, imgUrl, setImgUrl } = usePreviewImage();
  const [posts, setPosts] = React.useState<IPostDocument[]>([]);

  const imageRef = useRef<HTMLInputElement>(null);

  const handleCreatePost = async () => {
    const formData = new FormData();

    formData.append("Name", session?.user?.username as string);
    formData.append("profilePic", (session?.user?.picture as string) || "");
    formData.append("Content", input);
    formData.append("Image", (imgUrl as string) || "");
    formData.append("selected", selected);
    formData.append("userId", session?.user?.id as string);

    if (input.length === 0) {
      toast({
        variant: "destructive",
        title: "Alert!",
        description: "Text cannot be empty!",
        duration: 5000,
      });
      return;
    }
    const response = await createPost(formData);

    if ((response as string).length > 0) {
      toast({
        title: "Alert!",
        description: "Post created successfully!",
        duration: 5000,
      });
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getAllPost();
      setPosts(posts as IPostDocument[]);
    };
    fetchPosts();
  }, []);

  return (
    <div className="relative my-[120px] w-full flex-row">
      {session?.user?.Role !== "Student" && (
        <div className="flex-col text-lg justify-center items-center p-10 m-5 gap-5 ">
          <div
            className={`flex gap-10 justify-center px-20 ${styles.container}`}
          >
            <div className={styles.avatar}>
              {session?.user?.picture && (
                <Image
                  className={styles.img}
                  src={session?.user?.picture}
                  width={80}
                  height={80}
                  alt=""
                />
              )}
              {!session?.user?.picture && (
                <Image
                  className={styles.img}
                  src="/noavatar.png"
                  width={80}
                  height={80}
                  alt=""
                />
              )}
            </div>
            <div className="flex items-center">
              <Input
                className="lg:w-[30rem]  w-[100%] h-[3rem]"
                placeholder="Announce something"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
          </div>
          <div
            className={`flex gap-1 justify-center items-center py-5 px-20 ${styles.container}`}
          >
            <div className="flex items-center gap-1">
              <div className="h-[30px] mt-[1px] flex justify-center">
                <Label htmlFor="picture">
                  <h3>UPLOAD PHOTOS</h3>
                </Label>
              </div>
              <Input
                ref={imageRef}
                onChange={handleImageChange}
                id="picture"
                type="file"
              />
            </div>
            <div className="flex gap-[10px] p-[9px] rounded-full">
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
              <div
                className={`bg-[#FFFFFF] p-[4px] w-[40px] h-[40px] flex justify-center rounded-full ${styles.img}`}
              >
                <button onClick={handleCreatePost}>
                  <Image src="/send.png" width={30} height={30} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
        {posts.map((post: IPostDocument, index: number) => {
          return (
            <div>
              {(post?.section === session?.user?.section ||
                post?.section === "All" ||
                session?.user?.Role === "faculty") && (
                <AnnouncementsCard post={post} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Announcements;
