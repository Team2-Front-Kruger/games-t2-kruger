import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startLoadingGames } from "../../../store/collections/thunks";
import { NothingView } from "../NothingView";
import { GamesCollectionPage } from "./GamesCollectionPage";

export const CollectionPage = () => {
  const dispatch = useDispatch();

  const active = true;

  return (
    <main className="lg:pl-[340px] p-8 pt-36">
      <div>
        <h1 className="font-bold text-white	text-center text-3xl mb-4">
          Your Collections
        </h1>
      </div>
      {active ? <GamesCollectionPage /> : <NothingView />}
    </main>
  );
};
