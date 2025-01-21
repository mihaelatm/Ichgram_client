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
    addPost: (state, action) => {
      state.userPosts.push(action.payload);
    },
    updatePostContentAndDate: (state, action) => {
      const { postId, content, createdAt } = action.payload;
      const post = state.userPosts.find((post) => post._id === postId);
      if (post) {
        post.content = content;
        post.created_at = createdAt;
      }
    },
  },
});

export const selectPostCount = (state) => state.posts.userPosts.length;

export const { setPosts, triggerRefresh, addPost, updatePostContentAndDate } =
  postsSlice.actions;
export default postsSlice.reducer;
