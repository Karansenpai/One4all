"use server";

import Course from "@/models/courseModel";
import { connectToMongoDB } from "../db";

export const AddCourse = async (
  name: string,
  code: string,
  credit: number,
  description: string
) => {
  await connectToMongoDB();
  try {
    const course = new Course({
      name,
      code,
      credit,
      description,
    });

    await course.save();
    return "course added succesfully";
  } catch (err) {
    console.log(err);
  }
};

export const fetchCourses = async () => {
  await connectToMongoDB();
  try {
    const courses = await Course.find();
    console.log(courses);

    return courses;
  } catch (err) {
    console.log(err);
  }
};

export const fetchStudents = async (code: string, studentId: string) => {
  await connectToMongoDB();

  try {

    console.log(code, studentId);
    const course = await Course.findOne({ code });

    console.log(course);

    if(course){

      var students = course?.students;
      console.log(students);
      return students as string[];
    }

    return "Student not found";

  } catch (err) {
    return err as string;
  }
};

export const isEnrolled = async (code: string, studentId: string) => {
  await connectToMongoDB();

  try {
    const course = await Course.findOne({ code });
    if (course?.students?.includes(studentId)) {
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
};

export const courseEnroll = async (code: string, studentId: string) => {
  await connectToMongoDB();

  try {
    const course = await Course.findOne({ code });
    if (course) {
      course?.students?.push(studentId);
      await course?.save();
      return "enrolled Successfully";
    }
    return "Course not found";
  } catch (err) {
    return err as string;
  }
};

export const courseUnEnroll = async (code: string, studentId: string) => {
  await connectToMongoDB();

  try {
    const course = await Course.findOne({ code });
    if (course) {
      course.students = course?.students?.filter((id) => id !== studentId);
      await course.save();
      return "unenrolled Successfully";
    }
    return "Course not found";
  } catch (err) {
    return err as string;
  }
};

export const fetchStudentCourses = async (studentId: string) => {
  await connectToMongoDB();
  try {
    // const courses = (await Course.find({ students: studentId }));
   
    const courses = await Course.find({ students: studentId });
    if (courses) {
      return courses;
    }
    return "No courses found";
  } catch (err) {
    return err as string;
  }
};
