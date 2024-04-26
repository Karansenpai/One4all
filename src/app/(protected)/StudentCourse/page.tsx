"use client";
import { fetchStudentCourses } from "@/lib/course_action/course";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { ICourseDocument } from "@/models/courseModel";
import CourseInfo from "@/components/courseNav/courseCard/CourseCardInfo";
const StudentCourse = () => {
  const { data: session } = useSession();

  const [courses, setCourses] = useState<ICourseDocument[]>([]);

  useEffect(() => {
    console.log("StudentCourse");

    const getStudentCourses = async () => {
      const res = await fetchStudentCourses(session?.user?.RollNo || "");
      if (res) {
        setCourses(res as ICourseDocument[]);
      }
      console.log(res);
    };
    getStudentCourses();
  }, [session]);

  return (
    <div className="relative my-[120px] w-[100%] flex-row">
      <div className="flex w-[100%] flex-wrap gap-[5rem] p-10 m-10">
        {courses.map((course) => {
          return (
            <div className="flex">
              <CourseInfo item={course} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentCourse;
