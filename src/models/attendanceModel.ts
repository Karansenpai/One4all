import mongoose, { Model, Document } from "mongoose";

export interface IAttendance {
    RollNo?: string;
    course?: string,
    count? : number,
    data?: {
        date: string,
        present: boolean,
    }[],
}

export interface IAttendanceDocument extends IAttendance,Document {
    createdAt: Date;
    updatedAt: Date;
}


const AttendanceSchema = new mongoose.Schema<IAttendanceDocument>(
    {
        RollNo: {
            type: String,
            required: true,
        },
        course: {
            type: String,
            required: true,
        },
        count: {
            type: Number,
            default: 0,
        },
        data: [
            {
                date: {
                    type: String,
                    required: true,
                },
                present: {
                    type: Boolean,
                    required: true,
                },
            }
        ]
        

    },
    { timestamps: true }

);

const Attendance: Model<IAttendanceDocument> = mongoose.models?.Attendance || mongoose.model("Attendance", AttendanceSchema);

export default Attendance;