// postImageSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postImage: null,
};

const postImageSlice = createSlice({
  name: "postImage",
  initialState,
  reducers: {
    addPostImage: (state, action) => {
      state.postImage = action.payload;
    },
  },
});

export const { addPostImage } = postImageSlice.actions;

export default postImageSlice.reducer;
