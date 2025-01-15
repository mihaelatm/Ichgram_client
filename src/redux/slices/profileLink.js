import { createSlice } from "@reduxjs/toolkit";

const profileLinkSlice = createSlice({
  name: "profileLink",
  initialState: {
    profileLink: "",
  },
  reducers: {
    setProfileLink: (state, action) => {
      state.profileLink = action.payload;
    },
  },
});

export const { setProfileLink } = profileLinkSlice.actions;
export default profileLinkSlice.reducer;
