import mongoose, { Model, Document } from "mongoose";


export interface IPost {
    Name: string;
    profilePic: string;
    postedBy: mongoose.Schema.Types.ObjectId;
    text: string;
    img: string;
    section: string;
    replies: {
        userId: string,
        text: string;
        userProfilePic: string;
        username: string;
    }[];
}

export interface IPostDocument extends IPost, Document {
    createdAt: Date;
    updatedAt: Date;
}

const postSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        maxLength: 50,
    },
    profilePic: {
        type: String,
        default: ""
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    text: {
        type: String,
        required: true,
        maxLength: 500,
    },
    img: {
        type: String,
    },
    section: {
        type: String,
    },
    replies: [
        {
            userId: {
                type: String,
                required: true,
            },
            text: {
                type: String,
                required: true,
            },
            userProfilePic: {
                type: String,
            },
            username: {
                type: String,
            }
        }
    ]

}, {
    timestamps: true,
})

const Post: Model<IPostDocument> = mongoose.models?.Post || mongoose.model("Post", postSchema);

export default Post;