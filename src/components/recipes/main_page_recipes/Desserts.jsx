import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainPageRecipesContent from "./MainPageRecipesContent";
import { RecipesProvider } from "../../../context/RecipesContext";

export const Desserts = () => {
  const { recipes } = RecipesProvider();
  const navigate = useNavigate();
  const [sortedRecipes, setSortedRecipes] = useState([]);

  useEffect(() => {
    const desserts = [...recipes].filter(
      (recipie) => recipie.category === "Desery"
    );
    const sortedDesserts = desserts.sort(
      (a, b) => b.likedBy.length - a.likedBy.length
    );
    setSortedRecipes(sortedDesserts);
  }, [recipes]);

  const handleClick = () => {
    navigate("/category/desserts");
  };

  return (
    <>
      <MainPageRecipesContent
        sectionId="desserts"
        title="Desery"
        array={sortedRecipes}
        handleClick={handleClick}
        addButton={true}
      />
    </>
  );
};
