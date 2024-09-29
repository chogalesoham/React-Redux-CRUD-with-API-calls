import { configureStore } from "@reduxjs/toolkit";
import userDetail from "./Features/userDetailSlice";

export const Store = configureStore({
  reducer: {
    app: userDetail,
  },
});
