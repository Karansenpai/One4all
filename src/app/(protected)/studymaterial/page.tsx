"use client";
import styles from "./page.module.css";
import CourseNav from "@/components/courseNav/CourseNav";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function StudyMaterial() {
  const [selected, setSelected] = React.useState(0);
  return (
    <div
      className={`relative my-[120px] flex flex-col items-center justify-center ${styles.container}`}
    >
      <h1>Study Material</h1>
      <div className="bg-purple-700 p-2 m-5  rounded-md">
        <DropdownMenu>
          <DropdownMenuTrigger>
            Semester {selected == 0 ? "All" : selected}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                setSelected(0);
              }}
            >
              All
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setSelected(1);
              }}
            >
              1
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setSelected(2);
              }}
            >
              2
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setSelected(3);
              }}
            >
              3
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setSelected(4);
              }}
            >
              4
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className={styles.courseNav}>
        <CourseNav sem={selected} />
      </div>
    </div>
  );
}
