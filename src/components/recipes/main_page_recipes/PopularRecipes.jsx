import React from "react";
import { UserAuth } from "../../../context/AuthContext";
import { RecipesGroup } from "./RecipesGroup";
import { useNavigate } from "react-router-dom";
import { StyledH2 } from "../../../styles/StyledH2";

export const PopularRecipes = () => {
  const { recipes } = UserAuth();
  const popular = [...recipes].sort((a, b) => b.likedBy.length - a.likedBy.length);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/category/popular-recipes");
  };

  return (
    <section id="popular">
      <StyledH2>Najpopularniejsze przepisy</StyledH2>
      <RecipesGroup
        title="Najpopularniejsze przepisy"
        array={popular}
        onClick={handleClick}
        addButton={true}
        sliceBy={4}
      />
    </section>
  );
};
