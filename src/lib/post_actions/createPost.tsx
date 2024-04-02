"use server"

import Post from "@/models/postModel";

export const createPost = async(Formdata:FormData) => {
    const { Author, Date, Content, Image, selected } = Object.fromEntries(Formdata);
    const post = new Post({
        Author,
        Date,
        Content,
        Image,
        selected
    });
    await post.save();
    return "Post created successfully!"
}