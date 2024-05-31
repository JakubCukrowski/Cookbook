import React, { useEffect, useState } from "react";
import { UserAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import MainPageRecipesContent from "./MainPageRecipesContent";

export const NewestRecipes = () => {
  const { recipes } = UserAuth();
  const checkDate = (date) => new Date(date);
  const [sortedRecipes, setSortedRecipes] = useState([]);

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
