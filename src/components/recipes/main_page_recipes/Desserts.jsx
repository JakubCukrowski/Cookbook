import React, { useEffect, useState } from "react";
import { UserAuth } from "../../../context/AuthContext";
import { RecipesGroup } from "./RecipesGroup";
import { useNavigate } from "react-router-dom";
import { StyledH2 } from "../../../styles/StyledH2";

export const Desserts = () => {
  const { recipes, isRecipeAdded } = UserAuth();
  const checkDate = (date) => new Date(date);
  const navigate = useNavigate();
  const [sortedRecipes, setSortedRecipes] = useState([]);

  useEffect(() => {
    const desserts = [...recipes].filter(
      (recipie) => recipie.category === "Desery"
    );
    const sortedDesserts = desserts.sort(
      (a, b) => checkDate(b.createdAt) - checkDate(a.createdAt)
    );
    setSortedRecipes(sortedDesserts);
  }, [recipes, isRecipeAdded]);

  const handleClick = () => {
    navigate("/category/desserts");
  };

  return (
    <>
      <StyledH2>Desery</StyledH2>
      <RecipesGroup
        title="Desery"
        array={sortedRecipes}
        onClick={handleClick}
        addButton={true}
        sliceBy={4}
      />
    </>
  );
};
