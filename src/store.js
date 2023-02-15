import { configureStore } from "@reduxjs/toolkit";
import routeReducer from "../src/features/novelRoutes/routeSlice";
import playerReducer from "../src/features/playerReducer/playerSlice";

export const store = configureStore({
  reducer: {
    Routes: routeReducer,
    Player: playerReducer,
  },
});
