import { Paper } from "@mui/material";
import scss from "./DataCard.module.scss";
import React from "react";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CircularProgress from "@mui/material/CircularProgress";

export type DataCardProps = {
  title: string;
  value: number;
  description: string;
};

const DataCard = (props: DataCardProps) => {
  const { title, value, description } = props;
  return (
    <Paper className={scss.dataCard}>
      <div className={scss.header}>
        <Typography fontSize={"h6"} color={"lightslategrey"}>
          {title}
        </Typography>
        <Tooltip
          title={
            <Typography
              fontSize={16}
            >{`${description} which is ${value}`}</Typography>
          }
        >
          <IconButton>
            <InfoOutlinedIcon />
          </IconButton>
        </Tooltip>
      </div>
      <div className="flex px-3">
        <div className="flex-1">
          <div style={{ position: "relative" }}>
            <span style={{ position: "absolute", top: "12px", left: "10px" }}>
              {value}
            </span>
            <CircularProgress value={value} variant="determinate" size={50} />
          </div>
        </div>
        <div className="flex-2 flex flex-col justify-center py-1 px-2">
          {description}
        </div>
      </div>
    </Paper>
  );
};

export default DataCard;
