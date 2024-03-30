import React from "react";
import SideBarComp from "./SidebarComponent/SideBarComp";
const Sidebar = () => {
  return (
    <div className="min-w-[320px] dark:bg-[#121E31] bg-[#FFFFFF] hidden md:block h-full box-border ">
      <SideBarComp />
    </div>
  );
};

export default Sidebar;
