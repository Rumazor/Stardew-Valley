import { configureStore } from "@reduxjs/toolkit";
import routeReducer from "../src/features/novelRoutes/routeSlice";

export const store = configureStore({
  reducer: {
    testing: routeReducer,
  },
});
