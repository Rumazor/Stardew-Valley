import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Jugador",
};

export const testSlice = createSlice({
  name: "playerName",
  initialState,
  reducers: {
    setPlayerName: (state) => {
      state.name = state;
    },
  },
});

export const { setPlayerName } = testSlice.actions;

export default testSlice.reducer;
