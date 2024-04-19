import React, { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { deletePost } from "@/lib/post_actions/deletePost";
import { useToast } from "../ui/use-toast";
import { useSession } from "next-auth/react";
import { getReplies } from "@/lib/post_actions/getPost";
import ReplyCard from "./ReplyCard/ReplyCard";

const Replies = ({ post }: any) => {
  const [open, setopen] = React.useState(false);
  const { toast } = useToast();
  const [replies, setReplies] = React.useState([]);

  useEffect(() => {
    const getComments = async () => {
      const res = await getReplies(post?._id);
      setReplies(res);
      console.log(res);
    };
    getComments();
  }, [post]);

  return (
    <div className="w-[100%] flex-col gap-20 justify-center text-lg my-5 p-2 rounded-lg">
      <div className="w-[70%] gap-2 rounded-lg bg-slate-700 p-6">
        <div className="flex gap-24 w-full m-3 justify-between px-5">
          <div className="flex ">
            <div className="static p-[5px] min-w-[50px] rounded-full">
              <Image
                className="static rounded-full"
                src={post.profilePic ? post.profilePic : "/noavatar.png"}
                width={50}
                height={50}
                alt=""
              />
            </div>
            <div className="flex-row px-7 ">
              <div>{post?.Name}</div>
              <div>{post?.updatedAt?.toDateString()}</div>
            </div>
          </div>
        </div>
        <div className="m-3 p-3 text-justify">
          <p>{post.text}</p>
        </div>

        {post.img && (
          <div className="m-3 p-3">
            <Image
              onClick={() => {
                setopen(!open);
              }}
              src={post.img}
              width={1000}
              height={1000}
              alt=""
            />
            {open && (
              <div className="fixed top-[100px] left-[250px] ">
                <Image
                  onClick={() => {
                    setopen(!open);
                  }}
                  src={post.img}
                  width={1400}
                  height={1360}
                  alt=""
                />
              </div>
            )}
          </div>
        )}
      </div>
      <div className="gap-5 p-5 m-5">
        {replies &&
          replies.map((reply: any) => (
            <ReplyCard key={reply._id} reply={reply} />           
          ))}
          {/* {replies[0]?.text} */}
      </div>
    </div>
  );
};

export default Replies;
