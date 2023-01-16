import { Route, Routes } from "react-router-dom";
import { Contact } from "../components/contact/Contact";
import { Descargas } from "../components/contact/Descargas";
import { MainPage } from "../components/main/MainPage";
import { CollectionPage } from "../components/collections/pages/CollectionPage";
import { GamePage } from "../components/main/pages/GamePage";
import LoginComp from "../components/loginAndRegister/LoginComp";
import CardRegister from "../components/loginAndRegister/RegisterCard";

export const AppRouter = () => {
  const authStatus = "non-authenticated";

  return (
    <Routes>
      {
        // (authStatus=== 'non-authenticated')
      }

      <Route path="/" element={<MainPage />} />
      <Route path="/games/:nombre" element={<GamePage />} />
      <Route path="/user/colletion" element={<CollectionPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/descarga" element={<Descargas />} />
      <Route path="/login" element={<LoginComp />}></Route>
      <Route path="/register" element={<CardRegister />}></Route>
    </Routes>
  );
};
