import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../../firebase";
// import { FirebaseDB } from "../../../firebase/config";

export const loadGames = async (uid = "") => {
  if (!uid) throw new Error("El UID del usuario no existe");

  const collectionUser = collection(FirebaseDB, `${uid}/collection/games`);
  const docs = await getDocs(collectionUser);

  // console.log(docs);

  const games = [];

  docs.forEach((doc) => {
    // console.log(doc.id);
    // console.log(doc.data());
    games.push({ id: doc.id, ...doc.data() });
  });

  // console.log(games);

  return games;
};
