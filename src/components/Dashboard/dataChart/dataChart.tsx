"use client";
import React, { useEffect, useRef } from "react";
import { Chart, ChartConfiguration, registerables } from "chart.js";
import { darkOptions } from "./Themes";
// import { , course } from "./Util";
// import { ChartConfiguration } from "chart.js/dist/types";

// const ChartConfiguration = {
//   type: "line",
//   data: {},
//   options: {},
//   plugins: [],
// };

const DataChart = (props: ChartConfiguration) => {
  const { data, options } = props;
  const chartRef = useRef<HTMLCanvasElement>(null);

  // const labels = semester({ count: 8 });
  useEffect(() => {
    if (chartRef.current) {
      const chart = new Chart(chartRef.current, {
        ...props,
        options: {
          ...options,
          ...darkOptions,
        },
      });
      return () => {
        chart.destroy();
      };
    }
  }, [data]);
  return <canvas ref={chartRef} />;
};
Chart.register(...registerables);

export default DataChart;
