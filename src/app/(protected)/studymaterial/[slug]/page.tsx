"use client";
import { getcourseDetails } from "@/components/courseNav/data";
import styles from "./page.module.css";
import CourseMaterial from "@/components/courseMaterial/courseMaterial";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

interface NavItem {
  title: string;
  desc: string;
  links: string[][];
}

export default function SingleCoursePage({ params }: any) {
  const { slug } = params;
  const [courseDetail, setCourseDetails] = useState<NavItem>();
  const { data: session, status } = useSession();

  useEffect(() => {
    const fetchCourseDetails = async () => {
      const data =  getcourseDetails(slug);
      console.log(data);
      if(data){
        setCourseDetails(data as NavItem);
      }
    };
    fetchCourseDetails();
  }, [slug]);

  const links = courseDetail?.links;
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h2 className="text-xl font-semibold">{courseDetail?.title}</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.courseDetail}>
          {" "}
          <p className="text-gray-500 dark:text-gray-400">
            {courseDetail?.desc}
          </p>
          <div className={styles.courseContent}></div>
        </div>
        <div className={styles.courseMaterial}>
          {links?.map(
            (link: any, index: any) =>
              link && <CourseMaterial key={index} url={link} index={index} />
          )}
          {/* {session?.user.Role == "faculty" && (
            <Button className="w-[200px]"> Add Material </Button>
          )} */}
        </div>
      </div>
    </div>
  );
}
