"use server";

import Attendance from "@/models/attendanceModel";
import { connectToMongoDB } from "../db";

export const AddAttendance = async (
  RollNo: string,
  course: string,
  date: Date,
  present: string
) => {
  console.log(RollNo, course, date, present);
  await connectToMongoDB();
  try {
    const attendance = await Attendance.findOne({ RollNo, course });
    console.log(attendance);
    if (attendance) {
      const data = attendance.data;
      if (data) {
        data.push({
          date: date.toString(),
          present: present === "Present" ? true : false,
        });
      }
      console.log(data);

      if (present === "Present") {
        await Attendance.updateOne({ RollNo, course }, { $inc: { count: 1 } });
      } else {
        await Attendance.updateOne({ RollNo, course }, { $inc: { count: 0 } });
      }

      await Attendance.updateOne({ RollNo, course }, { data });

      console.log(attendance);
      return "Attendance added";
    } else {
      const newAttendance = new Attendance({
        RollNo,
        course,
        data: [
          {
            date: date.toString(),
            present: present === "Present" ? true : false,
          },
        ],
        count: present === "Present" ? 1 : 0,
      });
      await newAttendance.save();
      return "Attendance added";
    }
  } catch (err) {
    console.log(err);
  }
};


function isSameDay(d1: Date, d2: Date) {
    return d1.getFullYear() === d2.getFullYear()
      && d1.getMonth() === d2.getMonth()
      && d1.getDate() === d2.getDate();
  }

export const isPresent = async (RollNo: string, course: string, date: Date) => {
  await connectToMongoDB();
  try {
    console.log(RollNo, course, date);
    console.log("checking present");
    const attendance = await Attendance.findOne({ RollNo, course });
    console.log(attendance);
    if (attendance) {
      const data = attendance.data;
      if (data) {
        for (let i = 0; i < data.length; i++) {
          console.log(new Date(data[i].date));
          console.log(date);
          if (isSameDay(new Date(data[i].date), date)) {
            console.log("Attendance found");
            return true;
          }
        }
      }
    }
    return false;
  } catch (err) {
    console.log(err);
  }
};

export const fetchStudentAttendance = async (RollNo: string, course: string) => {
  await connectToMongoDB();
  try {

    console.log(RollNo, course)
    const attendance = await Attendance.findOne({ RollNo,course });
    console.log(attendance);

    const count = attendance?.count;
    return count;
   
  } catch (err) {
    console.log(err);
  }

}