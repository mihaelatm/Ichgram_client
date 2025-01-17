import { configureStore } from "@reduxjs/toolkit";
import usernameReducer from "../redux/slices/usernameSlice";
import profileLinkReducer from "../redux/slices/profileLink";
import bioReducer from "../redux/slices/bioSlice";
import imageReducer from "../redux/slices/imageSlice";
import postsReducer from "../redux/slices/postSlice";
import postImageReducer from "../redux/slices/postImage";

const store = configureStore({
  reducer: {
    username: usernameReducer,
    profileLink: profileLinkReducer,
    bio: bioReducer,
    image: imageReducer,
    posts: postsReducer,
    postImages: postImageReducer,
  },
});

export default store;
