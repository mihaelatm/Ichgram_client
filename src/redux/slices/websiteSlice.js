import { createSlice } from "@reduxjs/toolkit";

const websiteLinkSlice = createSlice({
  name: "websiteLink",
  initialState: {
    website_link: "",
  },
  reducers: {
    setWebsiteLink: (state, action) => {
      state.website_link = action.payload;
    },
  },
});

export const { setWebsiteLink } = websiteLinkSlice.actions;
export default websiteLinkSlice.reducer;
