import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RecipesProvider } from "../../../context/RecipesContext";
import MainRecipesStructure from "./MainRecipesStructure";

export const Desserts = () => {
  const { recipes } = RecipesProvider();
  const navigate = useNavigate();
  const [sortedDesserts, setSortedDesserts] = useState([]);

  useEffect(() => {
    const desserts = [...recipes].filter(
      (recipie) => recipie.category === "desserts"
    );
    const sortedDesserts = desserts.sort(
      (a, b) => b.likedBy.length - a.likedBy.length
    );
    setSortedDesserts(sortedDesserts);
  }, [recipes]);

  const handleClick = () => {
    navigate("/category/desserts");
  };

  return (
    <>
      <MainRecipesStructure
        sectionId="desserts"
        recipesGroupTitle="Desery"
        recipesArray={sortedDesserts}
        onButtonClick={handleClick}
      />
    </>
  );
};
