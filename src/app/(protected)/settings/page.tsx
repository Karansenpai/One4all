import ProfileBox from "@/components/ProfileBox/ProfileBox";
import React from "react";
import styles from "./page.module.css";
const Settings = async () => {
  return (
    <div className={styles.container}>
      <ProfileBox />
    </div>
  );
};

export default Settings;
