import { configureStore } from "@reduxjs/toolkit";
import usernameReducer from "../redux/slices/usernameSlice";
import aboutReducer from "../redux/slices/aboutSlice";
import profileLinkReducer from "../redux/slices/profileLink";

const store = configureStore({
  reducer: {
    username: usernameReducer,
    profileLink: profileLinkReducer,
    aboutText: aboutReducer,
  },
});

export default store;
