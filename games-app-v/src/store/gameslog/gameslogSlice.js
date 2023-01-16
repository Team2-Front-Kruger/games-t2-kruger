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
    const key="e6f060636ced479da85bc5c358663787";
    //`https://api.rawg.io/api/games?key=${key}&page=2&page_size=3`
    //'https://api.rawg.io/api/games?key=e6f060636ced479da85bc5c358663787&page=2&page_size=3'
    axios.get(`https://api.rawg.io/api/games?key=${key}&page=2&page_size=3`)
    .then((response) => {
        dispatch(cargarData(response.data.results));

    }).catch((error) => console.log(error));


}