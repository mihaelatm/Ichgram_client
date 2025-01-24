import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  followersCount: 0,
  followingCount: 0,
};

const followSlice = createSlice({
  name: "follow",
  initialState,
  reducers: {
    setFollowersCount: (state, action) => {
      state.followersCount = action.payload;
    },
    setFollowingCount: (state, action) => {
      state.followingCount = action.payload;
    },
    incrementFollowersCount: (state) => {
      state.followersCount += 1;
    },
    decrementFollowersCount: (state) => {
      state.followersCount -= 1;
    },
  },
});

export const {
  setFollowersCount,
  setFollowingCount,
  incrementFollowersCount,
  decrementFollowersCount,
} = followSlice.actions;

export const selectFollowersCount = (state) => state.follow.followersCount;
export const selectFollowingCount = (state) => state.follow.followingCount;

export default followSlice.reducer;
