import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startLoadingGames } from "../../../store/collections/thunks";
import { NothingView } from "../NothingView";
import { GamesCollectionPage } from "./GamesCollectionPage";

export const CollectionPage = () => {
  const dispatch = useDispatch();

  const active = true;

  return (
    <>
      <div>
        <h1 className="font-bold">Your Collections</h1>
      </div>
      {active ? <GamesCollectionPage /> : <NothingView />}
    </>
  );
};
