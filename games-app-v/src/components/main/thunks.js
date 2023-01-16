import { gameApi } from "../../api/gameApi";
import { setGames, startLoadingGames } from "../../store/main/mainSlice";

export const getGames = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingGames());

    //TODO: realizar petición http
    const key = "f51bbd49e46f48508bb036fdfff25c7d";

    const { data } = await gameApi.get(`/games?key=${key}&page=1&page_size=2`);

    console.log(data);

    dispatch(setGames({ games: data.results, page: page + 1 }));
  };
};
