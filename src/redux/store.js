import { configureStore } from "@reduxjs/toolkit";
import usernameReducer from "../redux/slices/usernameSlice";
import aboutReducer from "../redux/slices/aboutSlice";
import websiteReducer from "../redux/slices/websiteSlice";

const store = configureStore({
  reducer: {
    username: usernameReducer,
    aboutText: aboutReducer,
    website: websiteReducer,
  },
});

export default store;
