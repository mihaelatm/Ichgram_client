import { createSlice } from "@reduxjs/toolkit";

const aboutTextSlice = createSlice({
  name: "aboutText",
  initialState: {
    value: "",
  },
  reducers: {
    setAboutText: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setAboutText } = aboutTextSlice.actions;
export default aboutTextSlice.reducer;
