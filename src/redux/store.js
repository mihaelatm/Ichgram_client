import { configureStore } from "@reduxjs/toolkit";
import usernameReducer from "../redux/slices/usernameSlice";
import profileLinkReducer from "../redux/slices/profileLink";
import bioReducer from "../redux/slices/bioSlice";
import imageReducer from "../redux/slices/imageSlice";
import postImageReducer from "../redux/slices/postImageSlice";
import postsReducer from "../redux/slices/postSlice";
import otherUserPostsReducer from "../redux/slices/otherUserPostsSlice";

const store = configureStore({
  reducer: {
    username: usernameReducer,
    profileLink: profileLinkReducer,
    bio: bioReducer,
    image: imageReducer,
    postImage: postImageReducer,
    posts: postsReducer,
    otherUserPosts: otherUserPostsReducer,
  },
});

export default store;
