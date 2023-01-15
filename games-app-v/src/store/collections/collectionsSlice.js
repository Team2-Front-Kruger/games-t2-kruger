import { createSlice } from "@reduxjs/toolkit";

export const collectionSlice = createSlice({
  name: "collection",
  initialState: {
    isSaving: false,
    messageSaved: "",
    games: [],
    active: null,
  },
  reducers: {
    addNewGame: (state, action) => {
      state.isSaving = false;
      state.games.push(action.payload);
    },
    setActiveGame: (state, action) => {
      state.active = action.payload;
      state.messageSaved = "";
    },
    setGames: (state, action) => {
      state.games = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = "";
    },
    updateGame: (state, action) => {
      state.state = false;
      state.games = state.games.map((game) => {
        if (game.id === action.payload.id) {
          return action.payload;
        }
        return game;
      });
      state.messageSaved = "Nota actualizada";
    },
    deleteGameById: (state, action) => {
      state.isSaving = false;
      state.active = null;
      state.games = state.games.filter((game) => game.id !== action.payload);

      state.messageSaved = "Nota eliminada";
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addNewGame,
  setActiveGame,
  setGames,
  setSaving,
  updateGame,
  deleteGameById,
} = collectionSlice.actions;
