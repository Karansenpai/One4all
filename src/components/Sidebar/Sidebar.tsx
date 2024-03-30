import React from "react";
import style from "./Sidebar.module.css";
import SideBarComp from "./SidebarComponent/SideBarComp";
const Sidebar = () => {
  return (
    <div className={`${style.container} dark:bg-[#121E31] bg-[#FFFFFF] `}>
      <SideBarComp />
    </div>
  );
};

export default Sidebar;
