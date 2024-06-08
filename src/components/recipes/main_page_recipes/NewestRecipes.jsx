import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainPageRecipesContent from "./MainPageRecipesContent";
import { RecipesProvider } from "../../../context/RecipesContext";

export const NewestRecipes = () => {
  const { recipes } = RecipesProvider();
  const checkDate = (date) => new Date(date);
  const [sortedRecipes, setSortedRecipes] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const sorted = [...recipes].sort(
      (a, b) => checkDate(b.createdAt) - checkDate(a.createdAt)
    );
    setSortedRecipes(sorted);
  }, [recipes]);

  const handleClick = () => {
    navigate("/category/newest-recipes");
  };

  return (
    <>
      <MainPageRecipesContent
        sectionId="newest"
        title="Najnowsze przepisy"
        array={sortedRecipes}
        handleClick={handleClick}
        addButton={true}
      />
    </>
  );
};
