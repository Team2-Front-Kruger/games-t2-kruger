import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    uid: null,
    email: null,
  },
  reducers: {
    isLogged: (state, action) => {
      state.push(action.payload);
    },
    isLoggout: (state, action) => {
      state.splice(state.indexOf(0), 1);
    },
    login: (state, action) => {
      state.uid = action.payload.uid;
    },
  },
});

export const { isLogged, isLoggout, login } = authSlice.actions;

export default authSlice.reducer;
