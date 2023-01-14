import { createSlice } from "@reduxjs/toolkit";

export const collectionSlice = createSlice({
  name: "collection",
  initialState: {
    isSaving: true,
    messageSaved: "",
    games: [],
    active: {
      id: "ABCD123",
      title: "",
      date: 123456,
    },
  },
  reducers: {
    addNewGame: (state, action) => {},
    setActiveGame: (state, action) => {},
    setGame: (state, action) => {},
    setSaving: (state) => {},
    updateGame: (state, action) => {},
    deleteGameById: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  addNewGame,
  setActiveGame,
  setGame,
  setSaving,
  updateGame,
  deleteGameById,
} = collectionSlice.actions;
