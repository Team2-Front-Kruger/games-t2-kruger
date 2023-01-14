import { configureStore } from "@reduxjs/toolkit";
import { collectionSlice } from "./collections/collectionsSlice";
import { mainSlice } from "./main/mainSlice";

export const store = configureStore({
  reducer: {
    games: mainSlice.reducer,
    collections: collectionSlice.reducer,
  },
});
