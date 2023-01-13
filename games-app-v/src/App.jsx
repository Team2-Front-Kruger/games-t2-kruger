import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { AppRouter } from "./router/AppRouter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
