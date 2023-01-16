import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/landingPage/LandingPage";

import { useSelector } from "react-redux";
import "./App.css";
import { AuthProvider } from "./context/authContext";
import { AppRouter } from "./router/AppRouter";

function App() {
  const [count, setCount] = useState(0);
  const { uid } = useSelector((state) => state.auth);

  console.log(uid === null);

  return (
    <BrowserRouter>
      <AuthProvider>
        {/* <div className="bg-[#141414] min-h-screen"> */}
        {uid === null ? (
          <AppRouter />
        ) : (
          <div className=" min-h-screen">
            <LandingPage></LandingPage>
            <AppRouter />
          </div>
        )}

        {/* <div className=" min-h-screen">
          <LandingPage></LandingPage>
          <AppRouter />
        </div> */}
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
