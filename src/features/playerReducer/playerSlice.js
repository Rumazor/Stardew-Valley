import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playerInfo: {
    name: "",
    gender: "",
    favoriteThing: "",
    animalPreference: "",
  },
  choices: {},
};

export const playerSlice = createSlice({
  name: "Player Information",
  initialState,
  reducers: {
    setChoices: (state) => {
      state.choices = {
        karma: 1,
      };
    },
    setPlayerName: (state, action) => {
      state.playerInfo = action.payload;
    },
  },
});

export const { setPlayerName } = playerSlice.actions;
export default playerSlice.reducer;
