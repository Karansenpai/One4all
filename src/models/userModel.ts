import mongoose, { Model, Document } from "mongoose";

export interface IUser {
	username: string;
	email: string;
	avatar?: string;
    password?: string;
    section?: string;
    userId?: string;
    Role?: string,
    Branch?: string,
    Year?: string,
    Semester?: string,
    Department?: string,
    RollNo?: string,
    Subjects?: string[],
}

export interface IUserDocument extends IUser,Document {
    createdAt: Date;
    updatedAt: Date;
}


const userSchema = new mongoose.Schema<IUserDocument>(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            default: "",
        },
        password: {
            type: String,
        },
        section: {
            type: String,
            default: "",
        },
        userId: {
            type: String,
            default: "",
        },
        Role: {
            type: String,
            default: "Student",
        },
        Branch: {
            type: String,
            default: "",
        },
        Year: {
            type: String,
            default: "",
        },
        Semester: {
            type: String,
            default: "",
        },
        Department: {
            type: String,
            default: "",
        },
        RollNo: {
            type: String,
            default: "",
        },
        Subjects: {
            type: [String],
            default: [],
        },

    },
    { timestamps: true }

);

const User: Model<IUserDocument> = mongoose.models?.User || mongoose.model("User", userSchema);

export default User;