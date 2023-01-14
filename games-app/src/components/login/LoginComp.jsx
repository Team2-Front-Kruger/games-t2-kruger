import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const LoginComp = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const {login, loginWithGoogle} = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState();

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError('');
        try {
            await login(user.email, user.password);
            navigate('/');
        } catch (error) {
            setError(error.message);            
        }        
    };

    const handleGoogleSignin = async () => {
        try {
            await loginWithGoogle();
            navigate('/');
        } catch (error) {
            setError(error.message);            
        }

    }

    return (
        <div>
    <div className="hero min-h-screen bg-[url('https://wallpaperaccess.com/full/1470806.jpg')]">
        <div className="hero-content flex-col lg:flex-row">


            <div className="text-center lg:text-left text-white">
                <h1 className="text-5xl font-bold">Nuestros videojuegos</h1>
                <p className="py-6">Inicia sesión para poder acceder a todas las funciones de nuestra web y encontrar tus video juegos favoritos y mucho más</p>
            </div>

            
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#202430]">
                <div className="card-body text-white">
                <h1 className="text-3xl font-bold">Sign in</h1>
                <p className=" flex justify-between">
                        New User? <Link to='/register' className="underline text-blue-600"> Create an account </Link>
                </p>
                <form onSubmit={handleSubmit} className="card">
                        <label className="label"> <span className="label-text text-white">Email</span> </label>
                        <input name="email" onChange={handleChange} type="email" placeholder="email" className="input input-bordered input-primary  bg-[#2d3039] text-white" />
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input name="password" onChange={handleChange} type="password" placeholder="password" className="input input-primary  bg-[#2d3039] text-white" />
                        <br/>
                        <button className="btn btn-primary">Login</button>
                </form>
                <div className="text-center">
                    <h2>or login with</h2>
                </div>
                
                <button onClick={handleGoogleSignin} className="btn btn-secondary" >Google</button>
                    
                </div>
            </div>
        </div>
    </div>
</div>       
        


    );
    
}
 
export default LoginComp;