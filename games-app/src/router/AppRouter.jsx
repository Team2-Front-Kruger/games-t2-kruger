import { Route, Routes } from "react-router-dom";
import LoginComp from "../components/loginAndRegister/LoginComp";
import CardRegister from "../components/loginAndRegister/RegisterCard";
import { MainPage } from "../components/main/MainPage";
export const AppRouter = () => {
  const authStatus = "non-authenticated";

  return (
    <Routes>
      {
        // (authStatus=== 'non-authenticated')
      }
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginComp/>} ></Route>
      <Route path="/register" element={<CardRegister/>} ></Route>
    </Routes>
  );
};
