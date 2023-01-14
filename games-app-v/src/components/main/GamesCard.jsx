import { Link } from "react-router-dom";

export const GamesCard = ({
  name,
  slug,
  background_image,
  rating,
  ratings,
  ...games
}) => {
  // const {} = ratings;
  //console.log(ratings);

  const { title } = ratings.find((el) => el.id >= rating);

  return (
    <div className=" card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={background_image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <Link
          to={`/games/${slug}`}
          className="link no-underline hover:text-orange-500"
        >
          <h2 className="card-title">{name}</h2>
        </Link>
        <div className="badge badge-secondary">{title}</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          minus doloribus harum blanditiis?
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Action</div>
          <div className="badge badge-outline">Adventure</div>
        </div>
      </div>
    </div>
  );
};
