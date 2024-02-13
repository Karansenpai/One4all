import mongoose, { Model, Document } from "mongoose";


export interface IPost {
    postedBy: mongoose.Schema.Types.ObjectId;
    text: string;
    img: string;
    likes: string[];
    replies: {
        userId: mongoose.Schema.Types.ObjectId;
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
    likes: {
        type: [String],
        ref: "User",
        default: [],
    },
    replies: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
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