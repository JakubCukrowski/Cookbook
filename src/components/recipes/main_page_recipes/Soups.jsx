import React, { useEffect, useState } from "react";
import { UserAuth } from "../../../context/AuthContext";
import { RecipesGroup } from "../../../components/RecipesGroup";
import { Link, useNavigate } from "react-router-dom";
import { StyledH2 } from "../../../assets/styles/StyledH2";
import { Typography } from "@mui/material";

export const Soups = () => {
  const { recipes, isRecipeAdded } = UserAuth();
  const checkDate = (date) => new Date(date);
  const navigate = useNavigate();
  const [sortedRecipes, setSortedRecipes] = useState([]);

  useEffect(() => {
    const soups = [...recipes].filter((recipe) => recipe.category === "Zupy");
    const sortedSoupsByAddDate = [...soups]
      .sort((a, b) => checkDate(b.createdAt) - checkDate(a.createdAt))
      .sort((a, b) => b.likedBy.length - a.likedBy.length);
    setSortedRecipes(sortedSoupsByAddDate);
  }, [recipes, isRecipeAdded]);

  const handleClick = () => {
    navigate("/category/soups");
  };

  return (
    <>
      <StyledH2>Zupy</StyledH2>
      {sortedRecipes.length > 0 ? (
        <RecipesGroup
          title="Zupy"
          array={sortedRecipes}
          onClick={handleClick}
          addButton={true}
          sliceBy={4}
        />
      ) : (
        <Typography variant="h6" textAlign="center">
          Obecnie brak przepisów w tej kategorii <br /> <Link to="/signin">Zaloguj się</Link> i dodaj
          przepis
        </Typography>
      )}
    </>
  );
};
