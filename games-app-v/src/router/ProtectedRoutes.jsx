import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
//En caso que intente entrar a una ruta protegida o que necesite logearse 
//lo redirecciona a la página de login
const ProtectedRoute = ({children}) => {

    const {user, loading} = useAuth();

    if(loading) return<h1>loading</h1>

    if (!user) return <Navigate to='/login' />

    return ( 
    <>
    {children}
    </> );
}
 
export default ProtectedRoute;