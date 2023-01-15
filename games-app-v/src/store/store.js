import { configureStore } from "@reduxjs/toolkit";
import buscadorpReducer from "./Buscador/buscadorSlice";
import { mainSlice } from "./main/mainSlice";

export const store = configureStore({
  reducer: {
    games: mainSlice.reducer,
    buscador: buscadorpReducer,
  },
});
