import {
  addNewGame,
  deleteGameById,
  setGames,
  setSaving,
  updateGame,
} from "./collectionsSlice";
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { gameApi } from "../../api/gameApi";
import { loadGames } from "./helpers/loadGames";

export const startSaveGames = (slug) => {
  return async (dispatch, getState) => {
    //TODO: usar getState para acceder a los datos del STORE, username para enviarlo a Firebase

    dispatch(setSaving());

    // const { gameById } = getState().games;
    // console.log(gameById);
    const key = "527fdfafc46a42a8b6e39fdd86a5a6a2";

    const { data } = await gameApi.get(`/games/${slug}?key=${key}`);

    // const uid = crypto.randomUUID(); //el id asignado por FIREBASE al user

    const uid = "36ef2ab3-3d36-431b-98a0-af07db0fd5e4";

    const { name } = data;

    const newGame = {
      title: name,
      game: data,
      //   date: new Date().getTime(),
    };
    console.log(uid);

    const newDoc = doc(collection(FirebaseDB, `${uid}/collection/games`));
    const setDocResp = await setDoc(newDoc, newGame);
    console.log({ newDoc, setDocResp });

    console.log(newGame);

    newGame.id = newDoc.id;

    dispatch(addNewGame(newGame));

    console.log("SAVE GAME");
  };
};

export const startLoadingGames = (uid = "") => {
  return async (dispatch) => {
    // console.log("UID" + uid);
    if (!uid) throw new Error("El UID del usuario no existe");

    const games = await loadGames(uid);

    dispatch(setGames(games));
  };
};

export const startActiveGame = () => {};

export const startUpdate = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());

    //TODO: obtener el id de usuario desde el redux auth
    const uid = "36ef2ab3-3d36-431b-98a0-af07db0fd5e4";

    const { active: game } = getState().collections;

    const noteUpFireStore = { ...game };

    // console.log(game.id);
    // console.log(noteUpFireStore);

    const upDoc = doc(FirebaseDB, `${uid}/collection/games/${game.id}`);
    await setDoc(upDoc, noteUpFireStore, { merge: true });

    // dispatch(updateGame(game));
  };
};

export const startDeletingNote = () => {
  return async (dispatch, getState) => {
    const uid = "36ef2ab3-3d36-431b-98a0-af07db0fd5e4";
    const { active: game } = getState().collections;

    // console.log(game.id);

    const delDoc = doc(FirebaseDB, `${uid}/collection/games/${game.id}`);
    await deleteDoc(delDoc);

    dispatch(deleteGameById(game.id));
  };
};
