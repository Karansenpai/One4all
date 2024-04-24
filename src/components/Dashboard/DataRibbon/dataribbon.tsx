import React from "react";
import { Grid } from "@mui/material";
import DataCard from "../datacard/datacard";
import scss from "./dataribbon.module.scss";
import { course } from "../dataChart/Util";

const Dataribbon = () => {
  return (
    <>
      <div className={`w-[100%] ${scss.dataRibbon} gap-5 flex justify-center `}>
        <DataCard
          title={"Total Credits"}
          value={130}
          description={"Out of 160 "}
        />

        <DataCard
          title={"Current CGPA"}
          value={8.43}
          description={"Out of 10"}
        />

        <DataCard title={"Attendance"} value={80} description={""} />

        <DataCard title={"Course Drop"} value={0} description={""} />
      </div>
    </>
  );
};

export default Dataribbon;
