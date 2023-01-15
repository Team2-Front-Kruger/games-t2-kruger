import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setActiveGame } from "../../../store/collections/collectionsSlice";
import {
  startDeletingNote,
  startLoadingGames,
  startUpdate,
} from "../../../store/collections/thunks";
// import kruger from "../img/logoKrB.png";
import nintendo from "../../../assets/icons/nintendo.png";
import pc from "../../../assets/icons/windows.png";
import playstation from "../../../assets/icons/playstation.png";
import xbox from "../../../assets/icons/xbox.png";

export const GamesUserCard = ({
  idG: id,
  title,
  name,
  name_original,
  slug,
  background_image,
  rating,
  ratings,
  parent_platforms,
  genres,
  released,
  playtime,
  ...game
}) => {
  const { active = [] } = useSelector((state) => state.collections);

  // console.log(genres);
  // genres?.map((gn) => console.log(gn.name));

  // console.log(active?.title);

  // const titulo = !active?.title ? title : active?.title;

  // document.querySelector("#" + slug).innerHTML

  // console.log(document.querySelector("#" + slug)?.value);
  // document.querySelector("#i" + slug)?.innerHTML="Nrolado";

  const { title: titleC } = ratings?.find((el) => el.id >= rating);

  const [nameG, setNameG] = useState(name_original);

  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();

  const onClickGame = () => {
    setIsEdit(true);
    dispatch(setActiveGame({ id, title, game }));
  };

  const onDeleteGame = () => {
    dispatch(setActiveGame({ id, title, game }));
    dispatch(startDeletingNote());
  };

  const FormEdit = () => {
    const [newValue, setNewValue] = useState(title);

    const handleSubmit = (e) => {
      e.preventDefault();
    };

    const handleChange = (e) => {
      const value = e.target.value;
      setNewValue(value);
    };

    const handleClickUpdateTodo = () => {
      let value = newValue.trim();

      // if (value.length <= 0) {
      //   return swal("Debes ingresar algun texto", "", "error");
      // }
      // onUpdate(item.id, newValue);
      // console.log(document.querySelector("#" + slug).innerHTML);

      document.querySelector("#h2" + slug).innerHTML = newValue;
      // console.log(newValue);

      // console.log(active.title);

      dispatch(setActiveGame({ ...active, title: newValue }));

      dispatch(startUpdate());

      setIsEdit(false);
      //dispatch(startLoadingGames("36ef2ab3-3d36-431b-98a0-af07db0fd5e4"));
      // return swal("Se actualizó el ToDo", "", "success");
    };

    useEffect(() => {
      // console.log(document.querySelector("#" + slug));

      document.querySelector("#" + slug).value = document.querySelector(
        "#h2" + slug
      ).innerHTML;
    }, []);

    return (
      <form className="row g-2" onSubmit={handleSubmit}>
        <div className="col-auto">
          <input
            id={slug}
            type="text"
            className="input input-bordered input-error w-full max-w-xs italic font-medium"
            onChange={handleChange}
            autoFocus
            // value={newValue}
            // placeholder="Editar el Nombre del Juego"
          />
        </div>
        <div className="col-auto">
          <button
            className="button btn btn-primary mt-2"
            onClick={handleClickUpdateTodo}
          >
            Update
          </button>
        </div>
      </form>
    );
  };

  // const onEdit = (slug2) => {
  //   console.log(slug2);
  //   document.querySelector("#" + slug2).value = "asd";
  // };

  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-6">
      {/* <div
        className="w-[128px] bg-no-repeat h-[80px]"
        style={{
          backgroundImage: `url(${nintendo})`,
          width: 128,
          height: 128,
        }}
      ></div> */}

      <figure>
        <img
          src={background_image}
          alt="Game"
          className="h-[216px]"
          width="100%"
        />
      </figure>
      <div className="card-body">
        <Link
          to={`/games/${slug}`}
          className="link no-underline hover:text-orange-500"
        >
          <h2 id={"h2" + slug} className="card-title">
            {title}
          </h2>
        </Link>
        <div className="badge badge-secondary">{titleC}</div>
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
            <div key={gn.slug} className="badge badge-outline">
              {gn.name}
            </div>
          ))}
          {/* <div className="badge badge-outline">Action</div>
          <div className="badge badge-outline">Adventure</div> */}
        </div>
        <div className="flex">
          {parent_platforms?.map((p) => (
            <img
              key={p.platform.slug}
              src={`/icons/${p.platform.slug}.png`}
              alt="Game"
              className="w-8 h-8 mr-4"
            />
          ))}
        </div>
        <div className="flex justify-between">
          {isEdit ? (
            <FormEdit />
          ) : (
            // <button id="editb" className="btn" onClick={() => setIsEdit(true)}>
            <button
              id="editb"
              className="btn btn-circle btn-accent text-white"
              onClick={onClickGame}
            >
              Edit
            </button>
          )}
          {/* <button id="editb" className="btn ml-2" onClick={onDeleteGame}>
            Delete
          </button> */}
          <div>
            <button
              className="btn btn-circle btn-secondary"
              id="editb"
              onClick={onDeleteGame}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                name="Delete"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
