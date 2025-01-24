import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    followers_count: 0,
    following_count: 0,
  },
  reducers: {
    setFollowersCount: (state, action) => {
      state.followers_count = action.payload;
    },
    setFollowingCount: (state, action) => {
      state.following_count = action.payload;
    },
  },
});

export const { setFollowersCount, setFollowingCount } = userSlice.actions;
export default userSlice.reducer;
