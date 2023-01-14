import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/landingPage/LandingPage";

import { AppRouter } from "./router/AppRouter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <LandingPage></LandingPage>

      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
