import React from "react";
import { NothingView } from "../NothingView";
import { GamesCollectionPage } from "./GamesCollectionPage";

export const CollectionPage = () => {
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
