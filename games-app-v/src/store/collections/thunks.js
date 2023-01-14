import { setGame } from "./collectionsSlice";

export const startSaveGames = () => {
  return async (dispatch, getState) => {
    dispatch(setGame());

    console.log("SAVE GAME");

    const uid = crypto.randomUUID();
  };
};
