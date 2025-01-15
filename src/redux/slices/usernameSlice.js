import { createSlice } from "@reduxjs/toolkit";

const savedUsername = localStorage.getItem("username") || "";

const usernameSlice = createSlice({
  name: "username",
  initialState: {
    username: savedUsername,
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
      localStorage.setItem("username", action.payload);
    },
  },
});

export const { setUsername } = usernameSlice.actions;
export default usernameSlice.reducer;
