import { configureStore } from "@reduxjs/toolkit";
import usernameReducer from "../redux/slices/usernameSlice";
import profileLinkReducer from "../redux/slices/profileLink";
import bioReducer from "../redux/slices/bioSlice";

const store = configureStore({
  reducer: {
    username: usernameReducer,
    profileLink: profileLinkReducer,
    bio: bioReducer,
  },
});

export default store;
