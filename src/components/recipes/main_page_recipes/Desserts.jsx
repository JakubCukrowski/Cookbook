import React, { useEffect, useState } from "react";
import { UserAuth } from "../../../context/AuthContext";
import { RecipesGroup } from "../../../components/RecipesGroup";
import { Link, useNavigate } from "react-router-dom";
import { StyledH2 } from "../../../assets/styles/StyledH2";
import { Typography } from "@mui/material";
import MainPageRecipesContent from "./MainPageRecipesContent";

export const Desserts = () => {
  const { recipes, isRecipeAdded } = UserAuth();
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
  }, [recipes, isRecipeAdded]);

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
