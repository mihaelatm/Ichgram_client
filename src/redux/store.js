import { configureStore } from "@reduxjs/toolkit";
import usernameReducer from "../redux/slices/usernameSlice";
import profileLinkReducer from "../redux/slices/profileLink";
import bioReducer from "../redux/slices/bioSlice";
import imageReducer from "../redux/slices/imageSlice";

const store = configureStore({
  reducer: {
    username: usernameReducer,
    profileLink: profileLinkReducer,
    bio: bioReducer,
    image: imageReducer,
  },
});

export default store;
