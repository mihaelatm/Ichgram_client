import { createSlice } from "@reduxjs/toolkit";

const savedProfileLink = localStorage.getItem("profileLink") || "";

const profileLinkSlice = createSlice({
  name: "profileLink",
  initialState: {
    profileLink: savedProfileLink,
  },
  reducers: {
    setProfileLink: (state, action) => {
      state.profileLink = action.payload;
      localStorage.setItem("profileLink", action.payload); // Salvează în localStorage
    },
  },
});

export const { setProfileLink } = profileLinkSlice.actions;
export default profileLinkSlice.reducer;
