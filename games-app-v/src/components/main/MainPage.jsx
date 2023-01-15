import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startLoadingGames } from "../../store/collections/thunks";
import { GamesCard } from "./GamesCard";
import { HeroGames } from "./HeroGames";
import { getGames } from "./thunks";

export const MainPage = () => {
  const dispatch = useDispatch();

  const {
    isLoading,
    games = [],
    page,
    gamesPopular = [],
  } = useSelector((state) => state.games);

  // console.log(gamesPopular);

  let name = "";
  let background_image = "";

  gamesPopular.map((gp) => {
    name = gp.name;
    background_image = gp.background_image;
  });

  useEffect(() => {
    dispatch(getGames());
    // dispatch(startLoadingGames("36ef2ab3-3d36-431b-98a0-af07db0fd5e4"));
  }, []);

  return (
    <>
      {/* HERO - Trending - New */}
      <div>
        {gamesPopular.map((gameP) => (
          <HeroGames key={gameP.slug} {...gameP} />
        ))}
      </div>

      {/* CARD - TOP GAMES*/}
      <span>Loading: {isLoading ? "True" : "False"} </span>

      <Link
        to={`/user/colletion`}
        className="link no-underline hover:text-orange-500"
      >
        <h2 className="card-title">User</h2>
      </Link>

      <div className=" flex flex-wrap justify-between mx-auto ">
        {games.map((game) => (
          <GamesCard key={game.slug} {...game} page={page} />
        ))}
      </div>

      {/* CARD - CATEGORIES - 4 categories */}
      <div className="prose card-categories-4">
        <h2>POPULAR CATEGORIES</h2>
      </div>
    </>
  );
};
