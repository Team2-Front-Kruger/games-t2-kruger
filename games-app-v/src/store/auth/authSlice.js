import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:"auth",
    initialState: [],
    reducers: {
        isLogged: (state, action) => {
            state.push(action.payload);
        },
        isLoggout: (state, action) => {
            state.splice(state.indexOf(0), 1)
        }



    }

})

export const {isLogged, isLoggout} = authSlice.actions

export default authSlice.reducer