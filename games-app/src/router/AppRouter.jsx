import { Route, Routes } from "react-router-dom";
import { MainPage } from "../components/main/MainPage";
export const AppRouter = () => {
  const authStatus = "non-authenticated";

  return (
    <Routes>
      {
        // (authStatus=== 'non-authenticated')
      }
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};
