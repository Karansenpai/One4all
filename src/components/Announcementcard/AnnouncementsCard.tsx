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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const AnnouncementsCard = () => {
  return (
    <div className="w-[100%] min-h-[35%] flex justify-center text-lg my-5">
      <div className="w-[70%] h-full bg-slate-700 p-6">
        <div className="flex gap-24 w-full m-3 p-3 ">
          <div className="flex ">
            <div>
              <Avatar className="w-[50px] h-[50px]">
                <AvatarImage src="/noavatar.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex-row px-7 ">
              <div>John Doe</div>
              <div>Date</div>
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
                <DropdownMenuItem>Delete Post</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="m-3 p-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            quae, repellat rem eum, obcaecati temporibus eos a saepe nihil earum
            distinctio sunt maxime quos placeat deleniti debitis necessitatibus
            nam iste! Aliquam consequuntur facere quia dolorem dignissimos
            assumenda nemo, beatae debitis, quas cum dolores quisquam dicta
            corrupti hic repellat. Similique, nemo?
          </p>
        </div>

        <div className="flex gap-24 m-3 p-3">
          <div className="flex gap-6">
            <div>
              <Avatar className="w-[50px] h-[50px]">
                <AvatarImage src="/noavatar.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <Input
                className="h-10  lg:w-[32em] "
                type="text"
                placeholder="Add Comment"
              />
            </div>
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
      </div>
    </div>
  );
};

export default AnnouncementsCard;
