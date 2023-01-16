import axios from "axios";

export const gameApi = axios.create({
  baseURL: "https://api.rawg.io/api",
});
