import React from "react";
import { useNavigate } from "react-router-dom";
import MainPageRecipesContent from "./MainPageRecipesContent";
import { RecipesProvider } from "../../../context/RecipesContext";

export const PopularRecipes = () => {
  const { recipes } = RecipesProvider();
  const popular = [...recipes].sort(
    (a, b) => b.likedBy.length - a.likedBy.length
  );
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/category/popular-recipes");
  };

  return (
    <>
      <MainPageRecipesContent
        sectionId="popular"
        title="Najpopularniejsze przepisy"
        array={popular}
        handleClick={handleClick}
        addButton={true}
      />
    </>
  );
};
