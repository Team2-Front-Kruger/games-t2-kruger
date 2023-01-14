import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
const CardRegister = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const {signup} = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState();

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError('');
        try {
            await signup(user.email, user.password);
            navigate('/');

        } catch (error) {
            setError(error.message);
            
        }
        
        
    };


    return ( 
        <div>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label className="label"> <span className="label-text text-slate-900">Username or Email</span> </label>
                <input name="email" onChange={handleChange} type="email" placeholder="email" className="input input-bordered input-primary  bg-[#242731] text-white" />
                <label className="label">
                    <span className="label-text text-slate-900">Password</span>
                </label>
                <input name="password" onChange={handleChange} type="password" placeholder="password" className="input input-primary  bg-[#242731] text-white" />
                <button className="btn btn-primary">Register</button>
            </form>
        </div>
        
        
     );
}
 
export default CardRegister;