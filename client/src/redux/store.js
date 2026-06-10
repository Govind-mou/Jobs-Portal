import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import jobReducer from "./jobSlice";
import aiReducer from "./aiSlice";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    jobs: jobReducer,
    ai: aiReducer,
    user: userReducer,
  },
});