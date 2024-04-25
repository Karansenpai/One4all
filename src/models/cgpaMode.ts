import mongoose, { Model, Document } from "mongoose";

export interface ICgpaModel {
    RollNo?: string;
    sem?: number,
    count?: number,
}

export interface ICgpaModelDocument extends ICgpaModel, Document {
    createdAt: Date;
    updatedAt: Date;
}

const AttendanceSchema = new mongoose.Schema<ICgpaModelDocument>(
    {
        RollNo: {
            type: String,
            required: true,
        },
        sem: {
            type: Number,
            required: true,
        },
        count: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }

);

const Attendance: Model<ICgpaModelDocument> = mongoose.models?.Attendance || mongoose.model("Attendance", AttendanceSchema);

export default Attendance;