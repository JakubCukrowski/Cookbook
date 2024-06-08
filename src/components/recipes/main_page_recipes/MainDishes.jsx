import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainPageRecipesContent from "./MainPageRecipesContent";
import { RecipesProvider } from "../../../context/RecipesContext";

export const MainDishes = () => {
  const { recipes } = RecipesProvider();
  const navigate = useNavigate();
  const [mainDishes, setMainDishes] = useState([]);

  useEffect(() => {
    const filterAndSort = [...recipes]
      .filter((recipe) => recipe.category === "Dania główne")
      .sort((a, b) => b.likedBy.length - a.likedBy.length);
    setMainDishes(filterAndSort);
  }, [recipes]);

  const handleClick = () => {
    navigate("/category/main-dishes");
  };

  return (
    <>
      <MainPageRecipesContent
        sectionId="main_dishes"
        title="Dania główne"
        array={mainDishes}
        handleClick={handleClick}
        addButton={true}
      />
    </>
  );
};
