import { CardContent, CardFooter, Card } from "@/components/ui/card";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { ICourseDocument } from "@/models/courseModel";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import {
  courseEnroll,
  courseUnEnroll,
  isEnrolled,
} from "@/lib/course_action/course";
import { useToast } from "@/components/ui/use-toast";

const CourseInfo: React.FC<{ item: ICourseDocument }> = ({ item }) => {
  const { data: session, status } = useSession();
  const [enrolled, setEnrolled] = useState<boolean>(false);
  const { toast } = useToast();

  useEffect(() => {
    const checkEnrolled = async () => {
      const res = await isEnrolled(
        item?.code || "",
        session?.user?.RollNo || ""
      );
      console.log(res);
      if (res) {
        setEnrolled(res);
      }
    };
    checkEnrolled();
  }, []);

  const handleEnroll = async () => {
    const res = await courseEnroll(
      item?.code || "",
      session?.user?.RollNo || ""
    );
    if (res) {
      toast({
        title: "Success",
        description: "Enrolled Successfully",
        duration: 5000,
      });
      setEnrolled(true);
    }
  };

  const handleUnEnroll = async () => {
    const res = await courseUnEnroll(
      item?.code || "",
      session?.user?.RollNo || ""
    );
    if (res) {
      toast({
        title: "Success",
        description: "UnEnrolled Successfully",
        duration: 5000,
      });
      setEnrolled(false);
    }
  };
  return (
    <Card className="w-[400px] h-[400px] overflow-hidden ">
      <CardContent className="h-[70%] p-6 bg-[#334155]">
        <div className="flex h-[100%]  gap-4">
          <img
            alt="Course"
            className="h-[150px] w-[150px] rounded-lg"
            src="/download.png"
          />
          <div className="grid gap-1.5">
            <h2 className="text-lg font-semibold">{item?.name}</h2>
            <p className="overflow-y-hidden text-sm text-gray-500 dark:text-gray-400  ">
              {item?.description}
            </p>
          </div>
        </div>

        {session?.user?.Role === "Student" && (
          <div>
            {!enrolled ? (
              <Button onClick={handleEnroll}>Enroll</Button>
            ) : (
              <Button onClick={handleUnEnroll}>UnEnroll</Button>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter className="h-[30%] border-t p-6 bg-[#121E31] flex justify-center"></CardFooter>
    </Card>
  );
};

export default CourseInfo;
