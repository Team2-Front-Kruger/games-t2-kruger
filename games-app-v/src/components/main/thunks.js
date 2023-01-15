import { gameApi } from "../../api/gameApi";
import {
  setGames,
  setGamesById,
  startLoadingGames,
} from "../../store/main/mainSlice";

export const getGames = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingGames());

    //TODO: realizar petición http
    const key = "527fdfafc46a42a8b6e39fdd86a5a6a2";

    const { data } = await gameApi.get(`/games?key=${key}&page=1&page_size=9`);

    const { data: dataP } = await gameApi.get(
      `/games?key=${key}&dates=2021-01-01,2022-12-31&ordering=-added&page=1&page_size=1`
    );

    // console.log(data);

    dispatch(
      setGames({ games: data.results, gamesP: dataP.results, page: page + 1 })
    );
  };
};

export const getGamesByIdSlug = (game_name = "") => {
  return async (dispatch, getState) => {
    dispatch(startLoadingGames());

    const key = "527fdfafc46a42a8b6e39fdd86a5a6a2";

    const { data } = await gameApi.get(`/games/${game_name}?key=${key}`);

    // console.log(data);

    dispatch(setGamesById({ games: data }));
  };
};
