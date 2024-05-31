import React, { useEffect, useState } from "react";
import { UserAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import MainPageRecipesContent from "./MainPageRecipesContent";

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
      <MainPageRecipesContent
        sectionId="soups"
        title="Zupy"
        array={sortedRecipes}
        handleClick={handleClick}
        addButton={true}
      />
    </>
  );
};
