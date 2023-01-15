import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import {gameslogSlice} from "./gameslog/gameslogSlice";
import { mainSlice } from "./main/mainSlice";

export const store = configureStore({
  reducer: {
    games: mainSlice.reducer,
    auth: authSlice.reducer,
    gameslog: gameslogSlice.reducer,
  },
});
