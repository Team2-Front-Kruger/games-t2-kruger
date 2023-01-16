import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startLoadingGames } from "../../store/collections/thunks";
import { GamesCard } from "./GamesCard";
import { HeroGames } from "./HeroGames";
import { getGames } from "./thunks";
import "animate.css";
import { LoadingView } from "../LoadingView";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { isLoggout } from "../../store/auth/authSlice";

export const MainPage = () => {
  const dispatch = useDispatch();

  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
      dispatch(isLoggout(0));
    } catch (error) {
      console.log(error);
    }
  };

  function usuarioLogeado() {
    const authState = useSelector((state) => state.auth);
    if (authState.length === 0) {
      console.log("no hay usuario logeado");
    } else {
      console.log("usuario logeado");
    }
  }

  const {
    isLoading,
    games = [],
    page,
    page_size,
    gamesPopular = [],
    gamesRelease = [],
  } = useSelector((state) => state.games);

  // console.log(gamesPopular);

  const rel = gamesRelease?.filter((gr) => gr.slug !== "exoprimal");

  // console.log(rel);

  const str = rel?.map((pt) => pt.parent_platforms);
  // console.log(str);

  // str[2].map((p) => console.log(p.platform));

  // console.log(gamesRelease[0]?.background_image);
  // console.log(parent_platforms);
  // console.log(rel);

  let name = "";
  let background_image = "";

  gamesPopular.map((gp) => {
    name = gp.name;
    background_image = gp.background_image;
  });
  let c = 0;

  const [counter, setCounter] = useState(0);

  // console.log(counter);

  const [titleH, setTitleH] = useState(rel[0]?.name);
  if (counter > 3) {
    setCounter(0);
  }

  const next = () => {
    setCounter(counter + 1);
    setTitleH(rel[counter]?.name);

    document.querySelector(
      "#backIm"
    ).style.backgroundImage = `url(${rel[counter]?.background_image})`;
    document.querySelector("#slideP").src = rel[counter]?.background_image;
    document.querySelector("#h1H").innerHTML = rel[counter]?.name;
    document.querySelector("#h2H").innerHTML =
      "Game release date: " + rel[counter]?.released;
  };
  const back = () => {
    setCounter(counter - 1);
    setTitleH(rel[counter]?.name);
    if (counter < 0) {
      setCounter(0);
    }

    document.querySelector(
      "#backIm"
    ).style.backgroundImage = `url(${rel[counter]?.background_image})`;
    document.querySelector("#slideP").src = rel[counter]?.background_image;
    document.querySelector("#h1H").innerHTML = rel[counter]?.name;
    document.querySelector("#h2H").innerHTML =
      "Game release date: " + rel[counter]?.released;
  };

  const q = 10;

  const showBtnAll = q.length === 0;
  let showBtnAllSearch = q.length === 0;
  const showBtnBck = page === 1;
  const showBtnNxt = page === 150;

  useEffect(() => {
    dispatch(getGames());
    // dispatch(startLoadingGames("36ef2ab3-3d36-431b-98a0-af07db0fd5e4"));
  }, []);

  return (
    <main className="lg:pl-[340px] p-8 pt-36">
      {isLoading ? (
        <LoadingView />
      ) : (
        <>
          {/* HERO - Trending - New */}

          <div
            id="backIm"
            className="animate__animated animate__zoomIn rounded-2xl hero bg-no-repeat bg-[center_30%] "
            style={{ backgroundImage: `url(${rel[0]?.background_image})` }}
          >
            <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
            <div className="hero-content justify-between  items-end w-full text-left text-neutral-content">
              <div className="max-w-md">
                <h1 id="h1H" className="mb-5 text-5xl font-bold">
                  {rel[0]?.name}
                </h1>
                <h2 id="h2H" className="text-center">
                  Game release date: {rel[0]?.released}
                </h2>
                <br />
                {/* <div className="flex ">
          {rel?.map((p) => (
            <img
              key={p.parent_platforms.platform.slug}
              src={`/icons/${p.parent_platforms.platform.slug}.png`}
              alt="Game"
              className="w-8 h-8 mr-4"
            />
          ))}
        </div> */}

                {/* <button className="btn btn-primary">Go!</button> */}
              </div>
              <div className="animate__animated animate__zoomIn  w-80">
                <div className=" relative w-full">
                  <img
                    id="slideP"
                    src={rel[0]?.background_image}
                    className="w-full rounded-2xl animate__animated animate__zoomIn"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <div className="text-left">
                      <button className="btn glass btn-circle" onClick={back}>
                        ❮
                      </button>
                    </div>
                    <div className="text-right">
                      <button className="btn glass btn-circle" onClick={next}>
                        ❯
                      </button>
                    </div>

                    {/* <a href="#slide4" className="btn glass btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn glass btn-circle">
              ❯
            </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div>
    {rel.map((gameP) => (
      <HeroGames key={gameP.slug} {...gameP} />
    ))}
  </div> */}

          {/* CARD - TOP GAMES*/}
          {/* <span>Loading: {isLoading ? "True" : "False"} </span>

          <Link
            to={`/user/colletion`}
            className="link no-underline hover:text-orange-500 "
          >
            <h2 className="card-title">User</h2>
          </Link> */}

          <div className=" pt-4 flex flex-wrap justify-between mx-auto ">
            {games.map((game) => (
              <GamesCard key={game.slug} {...game} page={page} />
            ))}
          </div>

          {/* CARD - CATEGORIES - 4 categories */}
          <div className="prose card-categories-4">
            {/* <h2>POPULAR CATEGORIES</h2> */}
          </div>
          <div className="text-center mx-auto">
            <div className="btn-group ">
              <button
                className="btn btn-primary "
                disabled={showBtnBck || isLoading}
                onClick={() => dispatch(getGames(page - 1, page_size))}
                // style={{ display: showBtnAll ? "" : "none" }}
              >
                Back
              </button>
              <button
                className="btn btn-accent"
                disabled={showBtnNxt || isLoading}
                onClick={() => dispatch(getGames(page + 1, page_size))}
                // style={{ display: showBtnAll ? "" : "none" }}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  );
};
