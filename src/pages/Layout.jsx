import { Footer } from "../components/Footer";
import { CustomNavbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { RecipesProvider } from "../context/RecipesContext";
import CircularProgressPage from "./CircularProgressPage";

export const Layout = () => {
  const { recipes } = RecipesProvider();
  return (
    <>
      {recipes.length > 0 ? (
        <>
          <CustomNavbar />
          <Outlet />
          <Footer />
        </>
      ) : (
        <CircularProgressPage />
      )}
    </>
  );
};
