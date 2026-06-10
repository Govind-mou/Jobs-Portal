import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  selectedJob: null,
  loading: false,
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,

  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },

    addJob: (state, action) => {
      state.jobs.push(action.payload);
    },

    selectJob: (state, action) => {
      state.selectedJob = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setJobs,
  addJob,
  selectJob,
  setLoading,
} = jobSlice.actions;

export default jobSlice.reducer;