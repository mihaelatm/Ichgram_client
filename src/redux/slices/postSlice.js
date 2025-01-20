// postsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    userPosts: [],
    needsRefresh: false,
  },
  reducers: {
    setPosts: (state, action) => {
      state.userPosts = action.payload;
    },
    triggerRefresh: (state) => {
      state.needsRefresh = !state.needsRefresh;
    },
  },
});

export const { setPosts, triggerRefresh } = postsSlice.actions;
export default postsSlice.reducer;
