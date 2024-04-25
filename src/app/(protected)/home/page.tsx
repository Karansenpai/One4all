"use client";
import React, { useEffect, useState } from "react";
import Dataribbon from "@/components/Dashboard/DataRibbon/dataribbon";
import DataChart from "@/components/Dashboard/dataChart/dataChart";

const semesters = [
  "Sem 1",
  "Sem 2",
  "Sem 3",
  "Sem 4",
  "Sem 5",
  "Sem 6",
  "Sem 7",
  "Sem 8",
];

// const values = [];
//   let i, value;

//   for (i = 0; i < count; ++i) {
//     value = semesters[Math.ceil(i) % 8];
//     values.push(value.substring(0, section));
//   }

import styles from "./page.module.css";
import { fetchStudentCourses } from "@/lib/course_action/course";
import { useSession } from "next-auth/react";
import { ICourseDocument } from "@/models/courseModel";
import { fetchStudentAttendance } from "@/lib/attendance_action/attendance";
import { fetchCGPA } from "@/lib/cgpa_action/cgpa";

const Home = () => {
  const [courseName, setCourseName] = useState<string[]>([]);
  const [courseAttendanceData, setCourseAttendanceData] = useState<number[]>(
    []
  );
  const [cgpa, setcgpa] = useState<number[]>([]);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchCgpa = async () => {
      const res = await fetchCGPA(session?.user?.RollNo as string);
      if (res) {
        console.log(res);
        const updatedCgpa = [0, 0, 0, 0, 0, 0, 0, 0];
        res.map((item: any) => {
          updatedCgpa[item.sem - 1] = item.cgpa;
        });
        setcgpa(updatedCgpa);
      }
    };
    fetchCgpa();
  }, [session]);

  useEffect(() => {
    const getCourse = async () => {
      const res = await fetchStudentCourses(session?.user?.RollNo as string);
      if (res) {
        const uniqueCourseNames = new Set();
        (res as ICourseDocument[]).map((course: any) => {
          uniqueCourseNames.add(course.code);
        });
        setCourseName(Array.from(uniqueCourseNames) as string[]);
      }
    };

    getCourse();
  }, [session]);

  useEffect(() => {
    const getAttendance = async () => {
      const currentCourseName = [...courseName];

      const attendancePromises = currentCourseName.map((course) =>
        fetchStudentAttendance(session?.user?.RollNo as string, course)
      );

      const attendanceData = await Promise.all(attendancePromises);
      setCourseAttendanceData((attendanceData as number[]) || 0);
    };

    if (courseName.length > 0) {
      getAttendance();
    }
  }, [courseName]);

  const barChartData = {
    labels: courseName,
    datasets: [
      {
        label: "Course Attendance",
        data: courseAttendanceData,
        backgroundColor: [
          "rgb(255,137,168)",
          "rgb(178,3,106)",
          "rgb(165,7,42)",
          "rgb(255,137,168)",
          "rgb(178,3,106)",
          "rgb(165,7,42)",
          "rgb(255,137,168)",
          "rgb(178,3,106)",
          "rgb(165,7,42)",
          "rgb(255,137,168)",
          "rgb(178,3,106)",
          "rgb(165,7,42)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const lineChartData = {
    labels: semesters,
    datasets: [
      {
        label: "CGPA",
        data: cgpa,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

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
