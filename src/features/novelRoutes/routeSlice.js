import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  route: "noSelected",
};

export const testSlice = createSlice({
  name: "PlayableRoutes",
  initialState,
  reducers: {
    setStandardRoute: (state) => {
      state.route = "/standardRoute";
    },
    setMashWinRoute: (state) => {
      state.route = "/mashwinRoute";
    },
  },
});

export const { setMashWinRoute, setStandardRoute } = testSlice.actions;

export default testSlice.reducer;
