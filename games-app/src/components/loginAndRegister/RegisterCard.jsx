import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
const CardRegister = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const {signup} = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState();
    const dispatch = useDispatch();

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError('');
        try {
            await signup(user.email, user.password);
            navigate('/');
            dispatch(isLogged(user.email))

        } catch (error) {
            setError(error.message);            
        }
        
        
    };


    return ( 
        <div className="hero min-h-screen bg-[url('https://wallpaperaccess.com/full/1470806.jpg')]">
            <div className="hero-content flex-col lg:flex-row">

                <div className="text-center lg:text-left text-white">
                    {error && <p>{error}</p>}
                    <h1 className="text-5xl font-bold">Nuestros videojuegos</h1>
                    <p className="py-6">Inicia sesión para poder acceder a todas las funciones de nuestra web y encontrar tus video juegos favoritos y mucho más</p>
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#202430]">
                    <div className="card-body text-white">
                        <h1 className="text-3xl font-bold">Sign up</h1>
                        <p className=" flex justify-between">
                            Already a user? <Link to='/login' className="underline text-blue-600"> Login </Link>
                        </p>
                        <form onSubmit={handleSubmit} className="card">
                            <label className="label"> <span className="label-text text-white">Username or Email</span> </label>
                            <input name="email" onChange={handleChange} type="email" placeholder="email" className="input input-bordered input-primary  bg-[#242731] text-white" />
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input name="password" onChange={handleChange} type="password" placeholder="password" className="input input-primary  bg-[#242731] text-white" />
                            <br/>
                            <button className="btn btn-primary">Register</button>
                        </form>
                    </div>
                </div>



            </div>
        </div>
        
        
     );
}
 
export default CardRegister;