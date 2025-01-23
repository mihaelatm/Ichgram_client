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
    removePost: (state, action) => {
      state.userPosts = state.userPosts.filter(
        (post) => post._id !== action.payload
      );
    },
    updatePostContentAndDate: (state, action) => {
      const { postId, content, createdAt, images } = action.payload;
      const post = state.userPosts.find((post) => post._id === postId);
      if (post) {
        post.content = content;
        post.created_at = createdAt;
        post.images = images; // Actualizează și imaginile
      }
      state.needsRefresh = !state.needsRefresh; // Forțează re-renderizarea
    },
  },
});

export const selectPostCount = (state) => state.posts.userPosts.length;

export const {
  setPosts,
  triggerRefresh,
  addPost,
  removePost,
  updatePostContentAndDate,
} = postsSlice.actions;
export default postsSlice.reducer;
