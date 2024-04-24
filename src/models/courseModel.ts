import mongoose, { Model, Document } from "mongoose";

export interface ICourse {
    name?: string;
    code?: string;
    credit?: number;
    students?: string[];
    description?: string;
}

export interface ICourseDocument extends ICourse, Document {
    createdAt: Date;
    updatedAt: Date;
}


const CourseSchema = new mongoose.Schema<ICourseDocument>(
    {
        name: {
            type: String,
            required: true,
        },
        code: {
            type: String,
            required: true,
        },
        credit: {
            type: Number,
            required: true,
        },
        students: [
            {
                type: String,
                default: [],
            }
        ],
        description: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }

);

const Course: Model<ICourseDocument> = mongoose.models?.Course || mongoose.model("Course", CourseSchema);

export default Course;