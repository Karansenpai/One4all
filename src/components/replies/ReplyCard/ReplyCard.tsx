import React, { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
const ReplyCard = ({ reply }: any) => {
    return (
      <div className="flex items-start gap-4">
        <Avatar className="h-12 w-12 border border-gray-200 dark:border-gray-800 rounded-full">
          <AvatarImage alt="@shadcn" src={reply?.userProfilePic} />
          <AvatarFallback>AC</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <div className="font-medium">{reply?.username}</div>
          </div>
          <p className="text-gray-700 dark:text-gray-300">{reply?.text}</p>
        </div>
      </div>
    );
  };

export default ReplyCard;
