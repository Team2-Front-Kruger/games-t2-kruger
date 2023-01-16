import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingGames } from "../../../store/collections/thunks";
import { GamesUserCard } from "./GamesUserCard";

export const GamesCollectionPage = () => {
  const { games = [] } = useSelector((state) => state.collections);
  const { uid = "" } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadingGames(uid));
  }, []);

  return (
    <div className=" flex flex-wrap justify-between mx-auto ">
      {games?.map((game) => (
        <GamesUserCard
          key={game.game.slug}
          idG={game.id}
          title={game.title}
          {...game.game}
        />
      ))}
    </div>
  );
};
