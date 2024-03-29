import React from "react";
import style from "./Sidebar.module.css"
import SideBarComp from "./SidebarComponent/SideBarComp";
const Sidebar = () => {
  return <div className= {style.container}>

    <SideBarComp/>
    
  </div>;
};

export default Sidebar;
