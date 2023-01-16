import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { isLogged, login as logIN } from "../../store/auth/authSlice";
import CardGames from "./CardGames";

const LoginComp = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const resp = await login(user.email, user.password);
      const { uid } = resp.user;
      console.log("LOGIN->" + uid);
      navigate("/");
      // dispatch(isLogged(user.email))
      dispatch(logIN({ uid: uid }));
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-[url('./public/fondocallof.jpg')]">
        <div className="hero-content flex-col lg:flex-row w-full justify-around">
          <div className="text-center lg:text-left text-white">
            <h1 className="text-5xl font-bold">KrugGames</h1>
            <p className="py-6">Inicia sesión para poder guardar tus juegos</p>
            <CardGames />
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#202430]">
            <div className="card-body text-white">
              {error && (
                <div className="alert alert-error shadow-lg">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current flex-shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{error}</span>
                  </div>
                </div>
              )}
              <h1 className="text-3xl font-bold">Sign in</h1>
              <p className=" flex justify-between">
                New User?{" "}
                <Link to="/register" className="underline text-blue-600">
                  {" "}
                  Create an account{" "}
                </Link>
              </p>
              <form onSubmit={handleSubmit} className="card">
                <label className="label">
                  {" "}
                  <span className="label-text text-white">Email</span>{" "}
                </label>
                <input
                  name="email"
                  onChange={handleChange}
                  type="email"
                  placeholder="email"
                  className="input input-bordered input-primary  bg-[#2d3039] text-white"
                />
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  name="password"
                  onChange={handleChange}
                  type="password"
                  placeholder="password"
                  autoComplete="on"
                  className="input input-primary  bg-[#2d3039] text-white"
                />
                <br />
                <button className="btn btn-primary">Login</button>
              </form>
              <div className="text-center">
                <h2>or login with</h2>
              </div>

              <button
                onClick={handleGoogleSignin}
                className="btn btn-secondary"
              >
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComp;
