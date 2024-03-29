import Image from "next/image";
import Link from "next/link";
import React from "react";

const SideBarComp = () => {
  return (
    <div className="w-full  m-5">
      <div className="flex gap-5">
        <div>
          <Image src="/noavatar.png" alt="" width={40} height={40} />
        </div>

        <div className="flex-row">
          <div>Jhon Doe</div>

          <div>jhondoe@gmail.com</div>
        </div>
      </div>

      <div className="mt-[100px] flex-row w-4/5">
        <div className="flex  w-[80%] p-5 ">
          <Link className="hover:bg-[#22284F] w-full text-xl " href="/Announcements">
            Announcement
          </Link>
        </div>

        <div className="flex  w-[80%] p-5 h">
        <Link className="hover:bg-[#22284F] w-full text-xl " href="/">
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBarComp;
