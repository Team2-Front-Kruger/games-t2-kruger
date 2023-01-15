import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const gameslogSlice = createSlice({
    name:"gameslog",
    initialState: {
        list: [],
    },
    reducers: {
        cargarData: (state, action) => {
            state.list = action.payload;
        },



    }

})

export const {cargarData} = gameslogSlice.actions

export default gameslogSlice.reducer

export const fetch3Games = () => (dispatch) => {
    axios.get()
    .then((response) => {
        dispatch(cargarData(response.data.results));

    }).catch((error) => console.log(error));


}