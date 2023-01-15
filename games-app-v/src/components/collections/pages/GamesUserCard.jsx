import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setActiveGame } from "../../../store/collections/collectionsSlice";
import { startUpdate } from "../../../store/collections/thunks";

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
  // const { title: titleC } = ratings?.find((el) => el.id >= rating);
  const { active = [] } = useSelector((state) => state.collections);

  const [nameG, setNameG] = useState(name_original);

  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();

  const onClickGame = () => {
    setIsEdit(true);
    dispatch(setActiveGame({ id, title, game }));
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
      document.querySelector("#" + slug).innerHTML = newValue;
      // console.log(newValue);

      console.log(active.title);

      dispatch(setActiveGame({ ...active, title: newValue }));

      dispatch(startUpdate());

      setIsEdit(false);
      // return swal("Se actualizó el ToDo", "", "success");
    };

    // useEffect(() => {
    //   dispatch(setActiveGame({ title: newValue, ...game }));
    // }, [handleClickUpdateTodo]);

    return (
      <form className="todoUpdateForm row g-2" onSubmit={handleSubmit}>
        <div className="col-auto">
          <input
            type="text"
            className="todoInput form-control"
            onChange={handleChange}
            value={newValue}
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
          <h2 id={slug} className="card-title">
            {title}
          </h2>
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
        <div>
          {isEdit ? (
            <FormEdit />
          ) : (
            // <button id="editb" className="btn" onClick={() => setIsEdit(true)}>
            <button id="editb" className="btn" onClick={onClickGame}>
              Editar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
