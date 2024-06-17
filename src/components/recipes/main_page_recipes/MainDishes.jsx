import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RecipesProvider } from "../../../context/RecipesContext";
import MainRecipesStructure from "./MainRecipesStructure";

export const MainDishes = () => {
  const { recipes } = RecipesProvider();
  const navigate = useNavigate();
  const [mainDishes, setMainDishes] = useState([]);

  useEffect(() => {
    const filterAndSort = [...recipes]
      .filter((recipe) => recipe.category === "main_dishes")
      .sort((a, b) => b.likedBy.length - a.likedBy.length);
    setMainDishes(filterAndSort);
  }, [recipes]);

  const handleClick = () => {
    navigate("/category/main-dishes");
  };

  return (
    <>
      <MainRecipesStructure
        sectionId="main_dishes"
        recipesGroupTitle="Dania główne"
        recipesArray={mainDishes}
        onButtonClick={handleClick}
      />
    </>
  );
};
