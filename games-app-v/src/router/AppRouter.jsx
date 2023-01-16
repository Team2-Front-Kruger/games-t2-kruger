import { Route, Routes } from "react-router-dom";
import { Contact } from "../components/contact/Contact";
import { Descargas } from "../components/contact/Descargas";
import { MainPage } from "../components/main/MainPage";
export const AppRouter = () => {
  const authStatus = "non-authenticated";

  return (
    <Routes>
      {
        // (authStatus=== 'non-authenticated')
      }
      
      <Route path="/" element={<MainPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/descarga" element={<Descargas />} />
    </Routes>
  );
};
