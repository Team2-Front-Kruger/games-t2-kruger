import axios from "axios";
//token: e6f060636ced479da85bc5c358663787
//GET https://api.rawg.io/api/platforms?key=YOUR_API_KEY
//GET https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7
//https://api.rawg.io/api/games?key=e6f060636ced479da85bc5c358663787&page=2&page_size=4
export const gameApi = axios.create({
  baseURL: "https://api.rawg.io/api",
});
