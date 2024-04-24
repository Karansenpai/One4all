import mongoose, { Model, Document } from "mongoose";

export interface IAttendance {
    userId?: string;
    subject?: string,
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
        userId: {
            type: String,
            required: true,
        },
        subject: {
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