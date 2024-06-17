import React from "react";
import { useNavigate } from "react-router-dom";
import { RecipesProvider } from "../../../context/RecipesContext";
import MainRecipesStructure from "./MainRecipesStructure";

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
      <MainRecipesStructure
        sectionId="newest_recipes"
        recipesGroupTitle="Najpopularniejsze przepisy"
        recipesArray={popular}
        onButtonClick={handleClick}
      />
    </>
  );
};
