import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RecipesProvider } from "../../../context/RecipesContext";
import MainRecipesStructure from "./MainRecipesStructure";

export const PopularRecipes = () => {
  const { recipes } = RecipesProvider();
  const [popularRecipes, setPopularRecipes] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    const popular = [...recipes].sort(
      (a, b) => b.likedBy.length - a.likedBy.length
    );
    setPopularRecipes(popular);
  }, [recipes]);

  const handleClick = () => {
    navigate("/category/popular-recipes");
  };

  return (
    <>
      <MainRecipesStructure
        sectionId="newest_recipes"
        recipesGroupTitle="Najpopularniejsze przepisy"
        recipesArray={popularRecipes}
        onButtonClick={handleClick}
      />
    </>
  );
};
