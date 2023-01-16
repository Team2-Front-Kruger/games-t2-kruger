import { configureStore } from "@reduxjs/toolkit";
import { collectionSlice } from "./collections/collectionsSlice";
import buscadorpReducer from "./Buscador/buscadorSlice";
import { authSlice } from "./auth/authSlice";
import {gameslogSlice} from "./gameslog/gameslogSlice";
import { mainSlice } from "./main/mainSlice";

export const store = configureStore({
  reducer: {
    games: mainSlice.reducer,
    collections: collectionSlice.reducer,
    buscador: buscadorpReducer,
    auth: authSlice.reducer,
    gameslog: gameslogSlice.reducer,
  },
});
