import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/landingPage/LandingPage";

import { AppRouter } from "./router/AppRouter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="bg-[#141414] min-h-screen">
        <LandingPage></LandingPage>
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
