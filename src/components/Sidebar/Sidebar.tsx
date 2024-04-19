import React from "react";
import style from "./Sidebar.module.css";
import SideBarComp from "./SidebarComponent/SideBarComp";
const Sidebar = async () => {
  return (
    <div
      className={`${style.container} relative my-[4rem] dark:bg-[#121E31] bg-[#FFFFFF] `}
    >
      <SideBarComp />
    </div>
  );
};

export default Sidebar;
