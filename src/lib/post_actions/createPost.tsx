"use server"

import Post from "@/models/postModel";

export const createPost = async(Formdata:FormData) => {
    const {Content, Image, selected, userId } = Object.fromEntries(Formdata);

    const post = new Post({
        postedBy: userId,
        text: Content,
        img: Image,
        section: selected,
        replies: [],
    });

    await post.save();
    
    return "Post created successfully!"
}