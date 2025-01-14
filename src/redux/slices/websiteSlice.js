import { createSlice } from "@reduxjs/toolkit";

const websiteSlice = createSlice({
  name: "website",
  initialState: {
    link: "",
  },
  reducers: {
    setWebsite: (state, action) => {
      state.link = action.payload;
    },
  },
});

export const { setWebsite } = websiteSlice.actions;

export default websiteSlice.reducer;
