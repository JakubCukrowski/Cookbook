import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainPageRecipesContent from "./MainPageRecipesContent";
import { RecipesProvider } from "../../../context/RecipesContext";

export const Soups = () => {
  const { recipes } = RecipesProvider();
  const checkDate = (date) => new Date(date);
  const navigate = useNavigate();
  const [sortedRecipes, setSortedRecipes] = useState([]);

  useEffect(() => {
    const soups = [...recipes].filter((recipe) => recipe.category === "Zupy");
    const sortedSoupsByAddDate = [...soups]
      .sort((a, b) => checkDate(b.createdAt) - checkDate(a.createdAt))
      .sort((a, b) => b.likedBy.length - a.likedBy.length);
    setSortedRecipes(sortedSoupsByAddDate);
  }, [recipes]);

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
