import Post from "../models/Post.js";
import User from "../models/User.js";

/*Node CREATE */
export const createPost = async (req, res) => {
    try{
        const { userId, description, picturePath } = req.body;
        const user = await User.findById(userId);
        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes: {},//"someid" over here and trur going to look like: "someid": true
            comments: [],
          });
          await newPost.save();

          const post = await Post.find(); //All the posts retuent to frond end
          res.status(201).json(post);
    }catch(error) {
        res.status(409).json({ message: error.message},'Node CREATE createPost error (server > controllers> posts.js)')
    }
}

/*Node: READ */
export const getFeedPosts = async (req, res) => { // Get posts of everyone, be nyes fed everyone
    try {
        const post = await Post.find(); 
        res.status(200).json(post);

    } catch (error) {
        res.status(404).json({ message: error.message},'Node READ getFeedPosts error (server > controllers> posts.js)')
    }
}

export const getUserPosts = async (req, res) => {
    try {
        const { userId } = req.params;
        const post = await Post.find(userId); 
        res.status(200).json(post);

    } catch (error) {
        res.status(404).json({ message: error.message},'Node READ getFeedPosts error (server > controllers> posts.js)')
    }
}

/*Node UPDATE */
export const likePost = async (req, res) => {
    try {
        const {id} = req.params;// grab the relevant post(id come from the query string )
        const {userId} = req.body; // grab the body because thats how well be sending it from the front end
        const post = await Post.findById(id);
        const isLiked = post.likes.get(userId);//if the user id exists that means that post has been liked by that particular person

        if (isLiked) {
            post.likes.delete(userId);//Deletes if it already exists
        }else{
            post.likes.set(userId, true);// Sets it if it doesn't exist
        }

        const updatedPost = await Post.findByIdAndUpdate( //So this is how we going to update a specific post so we pass in likes to our new post that we have been modifying
            id,
            { likes: post.likes},
            { new: true }
        );

        res.status(200).json(updatedPost);//So we can update the front end
    } catch (error) {
        res.status(404).json({ message: error.message},'Node READ getFeedPosts error (server > controllers> posts.js)')
    }
}