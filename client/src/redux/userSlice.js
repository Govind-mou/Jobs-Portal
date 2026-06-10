import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {},
  applications: [],
  savedJobs: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },

    addApplication: (state, action) => {
      state.applications.push(action.payload);
    },

    saveJob: (state, action) => {
      state.savedJobs.push(action.payload);
    },

    removeSavedJob: (state, action) => {
      state.savedJobs = state.savedJobs.filter(
        (job) => job.id !== action.payload
      );
    },
  },
});

export const {
  setProfile,
  addApplication,
  saveJob,
  removeSavedJob,
} = userSlice.actions;

export default userSlice.reducer;