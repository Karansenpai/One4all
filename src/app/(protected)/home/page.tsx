"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Dataribbon from "@/components/Dashboard/DataRibbon/dataribbon";
import DataChart from "@/components/Dashboard/dataChart/dataChart";
import { lineChartData, barChartData } from "@/components/Dashboard/data";
import styles from "./page.module.css";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  return (
    <div className="my-[120px] text-white">
      <div className="h-[300px] rounded-lg bg-purple-900 absolute w-[100%]"></div>
      <div className=" p-5 relative flex">
        <div>
          <Dataribbon />
        </div>
      </div>
      <div className="m-5 p-5 flex  flex-col items-center gap-5 flex-wrap    ">
        <div className="relative py-5 w-[70%] bg-black rounded-xl flex-1">
          <DataChart type="line" data={lineChartData}></DataChart>
        </div>
        <div
          className={`${styles.container}relative py-5 w-[70%] bg-black rounded-xl flex-1`}
        >
          <DataChart type="bar" data={barChartData}></DataChart>
        </div>
      </div>
    </div>
  );
};

export default Home;
