import { createSlice } from "@reduxjs/toolkit";

const savedBio = localStorage.getItem("bio") || "";

const bioSlice = createSlice({
  name: "bio",
  initialState: {
    bio: savedBio,
  },
  reducers: {
    setBio: (state, action) => {
      state.bio = action.payload;
      localStorage.setItem("bio", action.payload);
    },
  },
});

export const { setBio } = bioSlice.actions;
export default bioSlice.reducer;
