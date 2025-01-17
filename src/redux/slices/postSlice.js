import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload); // Adăugăm postarea în array
    },
  },
});

export const { addPost } = postSlice.actions;

export default postSlice.reducer;
