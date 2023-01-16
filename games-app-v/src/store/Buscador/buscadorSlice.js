import { createSlice } from "@reduxjs/toolkit";

export const buscadorSlice = createSlice({
  name: "buscadorp",
  initialState: [],
  reducers: {
    addBuscador: (state, action) => {
      state.push(action.payload);
    //  state = action.payload;
    },
  },
});
export const { addBuscador } = buscadorSlice.actions;
export default buscadorSlice.reducer;
