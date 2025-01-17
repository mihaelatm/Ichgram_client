import { createSlice } from "@reduxjs/toolkit";

const savedPostImages = JSON.parse(localStorage.getItem("postImages")) || [];

const postImagesSlice = createSlice({
  name: "postImages",
  initialState: {
    images: savedPostImages,
  },
  reducers: {
    addPostImage: (state, action) => {
      state.images.push(action.payload); // Adăugăm imaginea în state
      localStorage.setItem("postImages", JSON.stringify(state.images)); // Salvează în localStorage
    },
    clearPostImages: (state) => {
      state.images = [];
      localStorage.removeItem("postImages");
    },
  },
});

export const { addPostImage, clearPostImages } = postImagesSlice.actions;
export default postImagesSlice.reducer;
