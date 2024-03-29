import React, { useEffect, useState } from "react";
import { UserAuth } from "../../../context/AuthContext";
import { RecipesGroup } from "./RecipesGroup";
import { useNavigate } from "react-router-dom";
import { StyledH2 } from "../../../styles/StyledH2";

export const Soups = () => {
  const { recipes, isRecipeAdded } = UserAuth();
  const checkDate = (date) => new Date(date);
  const navigate = useNavigate();
  const [sortedRecipes, setSortedRecipes] = useState([]);

  useEffect(() => {
    const soups = [...recipes].filter((recipe) => recipe.category === "Zupy");
    const sortedSoupsByAddDate = [...soups].sort(
      (a, b) => checkDate(b.createdAt) - checkDate(a.createdAt)
    ).sort((a, b) => b.likedBy.length - a.likedBy.length)
    setSortedRecipes(sortedSoupsByAddDate);
  }, [recipes, isRecipeAdded]);

  const handleClick = () => {
    navigate("/category/soups");
  };

  return (
    <>
      <StyledH2>Zupy</StyledH2>
      <RecipesGroup
        title="Zupy"
        array={sortedRecipes}
        onClick={handleClick}
        addButton={true}
        sliceBy={4}
      />
    </>
  );
};
