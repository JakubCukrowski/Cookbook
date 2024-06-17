import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RecipesProvider } from "../../../context/RecipesContext";
import { Container, Grid, Typography } from "@mui/material";
import { RecipeStructure } from "../../RecipeStructure";
import MainRecipesStructure from "./MainRecipesStructure";

export const NewestRecipes = () => {
  const { recipes } = RecipesProvider();
  const checkDate = (date) => new Date(date);
  const [newestRecipes, setNewestRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const sorted = [...recipes].sort(
      (a, b) => checkDate(b.createdAt) - checkDate(a.createdAt)
    );
    setNewestRecipes(sorted);
  }, [recipes]);

  const handleClick = () => {
    navigate("/category/newest-recipes");
  };

  return (
    <>
      <MainRecipesStructure
        sectionId="newest_recipes"
        recipesGroupTitle="Najnowsze przepisy"
        recipesArray={newestRecipes}
        onButtonClick={handleClick}
      />
    </>
  );
};
