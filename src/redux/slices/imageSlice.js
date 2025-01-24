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
      localStorage.setItem("profileImage", action.payload); // Salvăm în localStorage
    },
    clearProfileImage: (state) => {
      state.profile_image = "";
      localStorage.removeItem("profileImage"); // Ștergem din localStorage
    },
  },
});

export const { setProfileImage, clearProfileImage } = imageSlice.actions;
export default imageSlice.reducer;
