"use client";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { AddCourse, fetchCourses } from "@/lib/course_action/course";

import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

import { ICourseDocument } from "@/models/courseModel";
import CourseInfo from "@/components/courseNav/courseCard/CourseCardInfo";

const Courses = () => {
  const { data: session, status } = useSession();

  const [name, setName] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [credit, setCredit] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [courses, setCourses] = useState<ICourseDocument[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const getCourses = async () => {
      const res = await fetchCourses();
      setCourses(res as ICourseDocument[]);
      console.log(res);
    };
    getCourses();
  }, []);

  const hanldeSubmit = async () => {
    const res = await AddCourse(name, code, credit, description);
    if (res) {
      toast({
        title: "Success",
        description: res,
        duration: 5000,
      });
    }
  };

  return (
    <div className="relative my-[120px] w-full flex-row">
      {session?.user?.Role === "Admin" && (
        <div className="flex  justify-center w-[80%]">
          <div className="flex justify-center flex-col w-[50%]">
            <div>
              <Input
                placeholder="Course Name"
                value={name}
                onChange={(e) => setName(e?.target.value)}
              />
            </div>
            <div className="F]">
              <Input
                placeholder="Course Code"
                value={code}
                onChange={(e) => setCode(e?.target.value)}
              />
            </div>
            <div>
              <Input
                placeholder="Course Credit"
                value={credit}
                onChange={(e) => setCredit(parseInt(e?.target.value))}
              />
            </div>
            <div>
              <Input
                placeholder="Course Description"
                value={description}
                onChange={(e) => setDescription(e?.target.value)}
              />
            </div>
            <button onClick={hanldeSubmit}>Add Course</button>
          </div>
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-[5rem] p-10">
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

export default Courses;
