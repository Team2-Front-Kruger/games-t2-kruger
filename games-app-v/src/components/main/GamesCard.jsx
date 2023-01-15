import { Link } from "react-router-dom";
import { startSaveGames } from "../../store/collections/thunks";
import { useDispatch } from "react-redux";
import { getGamesByIdSlug } from "./thunks";

export const GamesCard = ({
  name,
  slug,
  background_image,
  rating,
  ratings,
  parent_platforms,
  genres,
  released,
  playtime,
  ...games
}) => {
  // const {} = ratings;
  //console.log(ratings);
  const dispatch = useDispatch();

  const { title } = ratings.find((el) => rating >= el.id);

  const onlcickSave = () => {
    // dispatch(getGamesByIdSlug(slug));
    dispatch(startSaveGames(slug));
  };

  return (
    <div className=" card w-96 bg-base-100 shadow-xl mb-6">
      <figure className="relative">
        <img
          src={background_image}
          alt="Games"
          className="h-[216px]"
          width="100%"
        />
        <div className="absolute flex justify-end transform -translate-y-[70px] left-2 right-3 top-1/">
          <button
            onClick={onlcickSave}
            className="btn btn-circle btn-secondary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </figure>
      <div className="card-body">
        <Link
          to={`/games/${slug}`}
          className="link no-underline hover:text-orange-500"
        >
          <h2 className="card-title">{name}</h2>
        </Link>
        <div className="badge badge-info">{title}</div>
        <div className="grid ">
          <div className="flex justify-between">
            <p>Release:</p> <span>{released}</span>
          </div>
          <div className="flex justify-between">
            <p>Play Time:</p> <span>{playtime}</span>
          </div>
        </div>
        <div className="card-actions justify-end">
          {genres?.map((gn) => (
            <div key={gn.slug} className="badge badge-outline badge-error">
              {gn.name}
            </div>
          ))}
        </div>
        <div className="flex ">
          {parent_platforms?.map((p) => (
            <img
              key={p.platform.slug}
              src={`/icons/${p.platform.slug}.png`}
              alt="Game"
              className="w-8 h-8 mr-4"
            />
          ))}
        </div>
        {/* <div>
          <button
            onClick={onlcickSave}
            className="btn btn-circle btn-outline btn-secondary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div> */}
      </div>
    </div>
  );
};
