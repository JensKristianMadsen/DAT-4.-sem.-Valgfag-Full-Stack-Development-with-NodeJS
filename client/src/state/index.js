import { createSlice } from "@reduxjs/toolkit";
  // this essentially will be the state that will be stored in our global state
                        // This type of information this basically this data will be accessible throughout our entire application and we can grab it anywhere we want so we don't have to pass in state and properties down to different components
// Global State
const initialState = {
  mode: "light", // this is going to represent dark mode and light mode and we going to configure it globally
  user: null, //this is all the auth information
  token: null,
  posts: [],
};
// These are functions that involve modifying the global State
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => { // replace the object as opposed to dirextly modifying the state
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => { //action(they call it payload but it's basically just the params or arguments for the function)
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => { //updatepost setting that particular post everything else we leave as it currently is 
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;
export default authSlice.reducer;