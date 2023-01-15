import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
  name: "main",
  initialState: {
    page: 0,
    games: [],
    gameById: [],
    gamesRelease: [],
    isLoading: false,
  },
  reducers: {
    startLoadingGames: (state) => {
      state.isLoading = true;
    },
    setGames: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.games = action.payload.games;
      state.gamesPopular = action.payload.gamesP;
      state.gamesRelease = action.payload.gamesRel;
    },
    setGamesById: (state, action) => {
      state.isLoading = false;
      state.gameById = action.payload.games;
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLoadingGames, setGames, setGamesById } = mainSlice.actions;
