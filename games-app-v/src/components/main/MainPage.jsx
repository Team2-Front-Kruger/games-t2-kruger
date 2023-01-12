import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGames } from "./thunks";

export const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
  }, []);

  return (
    <>
      <div>MainView</div>
    </>
  );
};
