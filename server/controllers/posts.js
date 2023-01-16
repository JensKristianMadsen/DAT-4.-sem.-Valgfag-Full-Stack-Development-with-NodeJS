import Post from "../models/Post.js";

/* CREATE */
export const createPost = async (req, res) => {
    try{

    }catch(error) {
        res.status(409).json({ message: error.message})
    }
}