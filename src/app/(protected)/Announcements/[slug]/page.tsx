"use client";
import AnnouncementsCard from "@/components/Announcementcard/AnnouncementsCard";
import { getPost } from "@/lib/post_actions/getPost";
import React, { useEffect, useState } from "react";
import { IPostDocument } from "@/models/postModel";
import Replies from "@/components/replies/Replies";
const page = ({ params }: any) => {
  const { slug } = params;

  const [post, setPost] = useState<IPostDocument | {}>({});

  useEffect(() => {
    const fetchPost = async () => {
      const res = await getPost(slug);
      setPost(res as IPostDocument);
    };
    fetchPost();
  }, []);


  return (
    <div className="relative my-[120px] w-full ">
      <div className="flex-col text-lg justify-center items-center p-10 m-5 gap-5 ">
        <div>
            <Replies post={post} />
        </div>
      </div>
    </div>
  );
};

export default page;
