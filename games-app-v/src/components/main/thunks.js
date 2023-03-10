import { gameApi } from "../../api/gameApi";
import {
  setGames,
  setGamesById,
  startLoadingGames,
} from "../../store/main/mainSlice";

export const getGames = (page = 1, page_size = 9) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingGames());

    //TODO: realizar petición http
    const key = "f51bbd49e46f48508bb036fdfff25c7d";

    const { data } = await gameApi.get(
      `/games?key=${key}&page=${page}&page_size=${page_size}`
    );

    const { data: dataP } = await gameApi.get(
      `/games?key=${key}&dates=2021-01-01,2022-12-31&ordering=-added&page=1&page_size=1`
    );

    const { data: dataRelease } = await gameApi.get(
      `/games?key=${key}&dates=2022-01-01,2023-12-31&ordering=-released&page=1&page_size=5`
    );

    // console.log(data);

    dispatch(
      setGames({
        games: data.results,
        gamesP: dataP.results,
        gamesRel: dataRelease.results,
        page: page,
        page_size: page_size,
      })
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

// export const getGamesByRelease = () => {
//   return async (dispatch, getState) => {
//     dispatch(startLoadingGames());

//     const key = "527fdfafc46a42a8b6e39fdd86a5a6a2";

//     const { data } = await gameApi.get(`/games?key=${key}&page=1&page_size=9`);

//     const { data: dataP } = await gameApi.get(
//       `/games?key=${key}&dates=2021-01-01,2022-12-31&ordering=-added&page=1&page_size=1`
//     );
//   };
// };
