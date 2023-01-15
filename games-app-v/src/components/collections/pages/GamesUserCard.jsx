import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setActiveGame } from "../../../store/collections/collectionsSlice";
import {
  startDeletingNote,
  startLoadingGames,
  startUpdate,
} from "../../../store/collections/thunks";

export const GamesUserCard = ({
  idG: id,
  title,
  name,
  name_original,
  slug,
  background_image,
  rating,
  ratings,
  ...game
}) => {
  const { active = [] } = useSelector((state) => state.collections);

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
      console.log(title);
      document.querySelector("#" + slug).value = document.querySelector(
        "#h2" + slug
      ).innerHTML;
    }, []);

    return (
      <form className="todoUpdateForm row g-2" onSubmit={handleSubmit}>
        <div className="col-auto">
          <input
            id={slug}
            type="text"
            className="todoInput form-control"
            onChange={handleChange}
            autoFocus
            // value={newValue}
            // placeholder="Editar el Nombre del Juego"
          />
        </div>
        <div className="col-auto">
          <button
            className="button btn btn-primary"
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
    <div className=" card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={background_image} alt="Game" />
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          minus doloribus harum blanditiis?
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Action</div>
          <div className="badge badge-outline">Adventure</div>
        </div>
        <div>
          {isEdit ? (
            <FormEdit />
          ) : (
            // <button id="editb" className="btn" onClick={() => setIsEdit(true)}>
            <button id="editb" className="btn" onClick={onClickGame}>
              Editar
            </button>
          )}
          <button id="editb" className="btn ml-2" onClick={onDeleteGame}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
