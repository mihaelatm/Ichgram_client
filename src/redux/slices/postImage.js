import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post_images: [], // Imaginile postărilor
};

const postImageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setPostImages: (state, action) => {
      state.post_images = action.payload; // Setăm imaginile postărilor
    },
  },
});

export const { setPostImages } = postImageSlice.actions;
export default postImageSlice.reducer;
