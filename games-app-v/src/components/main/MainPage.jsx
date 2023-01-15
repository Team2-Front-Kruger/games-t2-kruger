import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { isLoggout } from "../../store/auth/authSlice";
import { getGames } from "./thunks";

export const MainPage = () => {
  const dispatch = useDispatch();

  const {user, logout, loading} = useAuth();
  const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login')
            dispatch(isLoggout(0))
        } catch (error) {
            console.log(error);
        }   
    };

    function usuarioLogeado (){
      const authState = useSelector(state=> state.auth);
      if( authState.length === 0) {
        console.log("no hay usuario logeado");
      }else{
        console.log("usuario logeado")
      }
    }


  useEffect(() => {
    dispatch(getGames());
  }, []);

  
  if ( loading) {
    return(<h1>Componente de carga eaaa</h1>);
}

  return (
    <>
      <div>MainView {usuarioLogeado}</div>
      <button onClick={handleLogout} className="btn">Logout</button>
    </>
  );
};
