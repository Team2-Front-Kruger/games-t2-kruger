import { configureStore } from "@reduxjs/toolkit";
import { mainSlice } from "./main/mainSlice";

export const store = configureStore({
  reducer: {
    games: mainSlice.reducer,
  },
});
