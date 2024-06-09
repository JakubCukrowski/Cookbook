import { Footer } from "../components/Footer";
import { CustomNavbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { RecipesProvider } from "../context/RecipesContext";
import { SpinnerContainer } from "../assets/styles/Containers";
import { CircularProgress } from "@mui/material";

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
        <SpinnerContainer>
          <CircularProgress color="inherit"/>
        </SpinnerContainer>
      )}
    </>
  );
};
