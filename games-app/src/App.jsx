import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/authContext";
import { AppRouter } from "./router/AppRouter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
