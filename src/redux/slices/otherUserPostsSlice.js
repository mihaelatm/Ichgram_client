// src/redux/slices/otherUserPostsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const otherUserPostsSlice = createSlice({
  name: "otherUserPosts",
  initialState: {
    posts: [],
  },
  reducers: {
    setOtherUserPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { setOtherUserPosts } = otherUserPostsSlice.actions;
export const selectOtherUserPostCount = (state) =>
  state.otherUserPosts.posts.length;
export default otherUserPostsSlice.reducer;
