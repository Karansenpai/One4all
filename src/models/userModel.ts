import mongoose, { Model, Document } from "mongoose";

export interface IUser {
	username: string;
	fullName?: string;
	email: string;
	avatar?: string;
    password?: string;
    userId?: string;
    isAdmin: boolean;
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
        fullName: {
            type: String,
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
        userId: {
            type: String,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        }  
    },
    { timestamps: true }

);

const User: Model<IUserDocument> = mongoose.models?.User || mongoose.model("User", userSchema);

export default User;