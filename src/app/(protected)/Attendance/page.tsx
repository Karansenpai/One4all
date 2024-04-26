"use client";

import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { fetchCourses, fetchStudents } from "@/lib/course_action/course";
import { ICourseDocument } from "@/models/courseModel";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AddAttendance, isPresent } from "@/lib/attendance_action/attendance";
import { useToast } from "@/components/ui/use-toast";

const Attendance = () => {
  const { data: session } = useSession();
  const [course, setCourse] = useState<string>("");
  const [courses, setCourses] = useState<ICourseDocument[]>([]);
  const [students, setStudents] = useState<string[]>([]);
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [present, setPresent] = useState("absent");
  const [student, setStudent] = useState("");
  const { toast } = useToast();
  const [hiddenLabels, setHiddenLabels] = useState<string[]>([]);

  useEffect(() => {
    const getAllcourses = async () => {
      const res = await fetchCourses();

      setCourses(res as ICourseDocument[]);
    };
    getAllcourses();
  }, []);

  useEffect(() => {
    const getStudents = async () => {
      const res = await fetchStudents(course, session?.user?.RollNo as string);

      if (res) {
        setStudents(res as string[]);
      }
    };
    getStudents();
  }, [course]);

  useEffect(() => {
    const checkPresent = async () => {
      console.log("Checkig");
      console.log(student);
      const res = await isPresent(student, course, date as Date);
      console.log(res);
      if (res) {
        setHiddenLabels([...hiddenLabels, student]);
      }
    };
    checkPresent();
  }, [date, student, course]);

  // console.log(hiddenLabels);

  const handleAttendance = async () => {
    const res = await AddAttendance(student, course, date as Date, present);
    if (res) {
      toast({
        title: "Attendance Added",
        description: "Attendance added successfully",
        duration: 5000,
      });
      setHiddenLabels([...hiddenLabels, student]);
    }
  };

  return (
    <div className="mx-[20px] relative my-[120px] w-[75%] p-5 flex-row">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold">Attendance</h1>
      </div>

      <div className="flex items-center p-5 gap-[2rem]">
        <div>
          <Label>Select Course</Label>
        </div>
        <Select
          onValueChange={(value) => {
            setCourse(value);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Course" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Course</SelectLabel>
              {courses.map((course) => (
                <SelectItem key={course._id} value={course?.code || ""}>
                  {course.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col p-5 gap-3">
        <div>
          <Label>Select Date</Label>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[280px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex p-5 gap-[2rem]">
        <div>
          <Label>Students </Label>
        </div>
        <div>
          {course.length > 0 && (
            <div className="p-5 m-5 flex flex-col justify-center gap-5">
              {Object.keys(students).map((key) =>
                !hiddenLabels?.includes(students[parseInt(key)]) ? (
                  <div className="flex items-center gap-3">
                    <Label>{students[parseInt(key)]}</Label>

                    <RadioGroup
                      defaultValue="absent"
                      className="flex"
                      onValueChange={(value) => {
                        setPresent(value);
                        setStudent(students[parseInt(key)]);
                      }}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Absent" id="r1" />
                        <Label htmlFor="r2">Absent</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Present" id="r2" />
                        <Label htmlFor="r3">Present</Label>
                      </div>
                      <div>
                        <Button onClick={handleAttendance}>Submit</Button>
                      </div>
                    </RadioGroup>
                  </div>
                ) : null
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Attendance;
