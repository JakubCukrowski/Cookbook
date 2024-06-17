import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RecipesProvider } from "../../../context/RecipesContext";
import { Container, Grid, Typography } from "@mui/material";
import { RecipeStructure } from "../../RecipeStructure";
import MainRecipesStructure from "./MainRecipesStructure";

export const Soups = () => {
  const { recipes } = RecipesProvider();
  const checkDate = (date) => new Date(date);
  const navigate = useNavigate();
  const [sortedSoups, setSortedSoups] = useState([]);

  useEffect(() => {
    const soups = [...recipes].filter((recipe) => recipe.category === "soups");
    const sortedSoupsByAddDate = [...soups]
      .sort((a, b) => checkDate(b.createdAt) - checkDate(a.createdAt))
      .sort((a, b) => b.likedBy.length - a.likedBy.length);
    setSortedSoups(sortedSoupsByAddDate);
  }, [recipes]);

  const handleClick = () => {
    navigate("/category/soups");
  };

  return (
    <>
      <MainRecipesStructure
        sectionId="soups"
        recipesGroupTitle="Zupy"
        recipesArray={sortedSoups}
        onButtonClick={handleClick}
      />
    </>
  );
};
