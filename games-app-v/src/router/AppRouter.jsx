import { Route, Routes } from "react-router-dom";
import { MainPage } from "../components/main/MainPage";
import { CollectionPage } from "../components/collections/pages/CollectionPage";
import { GamePage } from "../components/main/pages/GamePage";
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
    </Routes>
  );
};
