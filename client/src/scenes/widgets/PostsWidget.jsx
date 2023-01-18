import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import state, { setPosts } from "state";
import PostWidget from "./PostWidget";

const PostsWidget = ({ userId, isProfile = false }) => {
    const dispatch = useDispatch();
    const posts = useSelector((state) = state.posts);
    const token = useSelector((state) => state.token);

    //PostWidget is going to do two things on the home page it's going to grab all the user all the posts from anybody and that's going to be the API call regarding go to server>routes>posts.js to getFeedPosts, however if got to the profile page specific users page we go call getUserPosts we're foing to address both of these

};

export default PostsWidget;