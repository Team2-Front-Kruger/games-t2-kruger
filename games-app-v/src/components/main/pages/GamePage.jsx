import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGamesByIdSlug } from "../thunks";

export const GamePage = () => {
  //TODO: cuadno recargo redux pierde informacion si no cargo desde main, para evitar crear
  // un getGameId if state.games = vacío, solo si esta vacio, en caso que entren directo  buscar
  // el juego sin pasar por main.

  const { nombre } = useParams();

  const { games = [], gameById = [] } = useSelector((state) => state.games);

  const dispatch = useDispatch();

  const {
    name,
    slug,
    background_image,
    short_screenshots = [],
  } = games.find((game) => game.slug === nombre);

  const { description } = gameById;

  const descr = useRef();

  // descr.current = description;
  // document.querySelector("#descrip").innerHTML = description;
  // console.log(des);

  // document.getElementById("descrip").innerHTML;

  const background_img = short_screenshots.filter((g) => g.id > 0);

  useEffect(() => {
    descr.current.innerHTML = description;
    dispatch(getGamesByIdSlug(slug));
  }, []);

  return (
    <div className="mt-20 ml-40 ">
      <div
        className="hero place-items-start min-h-screen rounded-3xl"
        style={{ backgroundImage: `url(${background_image})` }}
      >
        <div className="hero-overlay  bg-opacity-60 rounded-3xl"></div>
        <div className="hero-content flex-col justify-start w-full h-full text-start text-neutral-content">
          <h1 className="mb-5 text-5xl text-center font-bold">{name}</h1>
          {/* CAROUSEL */}

          <div className="carousel carousel-center max-w-2xl p-4 space-x-4  rounded-box">
            {background_img.map((game) => (
              <div key={game.slug} className="carousel-item">
                <img
                  key={game.slug}
                  src={game.image}
                  className="rounded-box  max-w-xl"
                />
              </div>
            ))}
          </div>

          {/* END-CAROUSEL */}

          <div className="max-w-md">
            <div ref={descr} id="descrip"></div>
            {/* <p className="mb-5">{description}</p> */}
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};
