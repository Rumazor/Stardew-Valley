import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const testSlice = createSlice({
  name: "testing",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = testSlice.actions;

export default testSlice.reducer;
