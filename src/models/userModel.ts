import mongoose, { Model, Document } from "mongoose";

export interface IUser {
	username: string;
	email: string;
	avatar?: string;
    password?: string;
    section?: string;
    userId?: string;
    Role?: string,
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
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        avatar: {
            type: String,
        },
        password: {
            type: String,
        },
        section: {
            type: String,
            default: "A",
        },
        userId: {
            type: String,
        },
        Role: {
            type: String,
            default: "Student",
        }  
    },
    { timestamps: true }

);

const User: Model<IUserDocument> = mongoose.models?.User || mongoose.model("User", userSchema);

export default User;