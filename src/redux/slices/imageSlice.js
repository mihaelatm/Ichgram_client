import { createSlice } from "@reduxjs/toolkit";

const savedImage = localStorage.getItem("profileImage") || "";

const imageSlice = createSlice({
  name: "image",
  initialState: {
    profile_image: savedImage,
  },
  reducers: {
    setProfileImage: (state, action) => {
      state.profile_image = action.payload;
      localStorage.setItem("profileImage", action.payload);
    },
  },
});

export const { setProfileImage } = imageSlice.actions;
export default imageSlice.reducer;
