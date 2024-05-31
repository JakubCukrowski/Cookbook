import React from "react";
import { UserAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import MainPageRecipesContent from "./MainPageRecipesContent";

export const PopularRecipes = () => {
  const { recipes } = UserAuth();
  const popular = [...recipes].sort(
    (a, b) => b.likedBy.length - a.likedBy.length
  );
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/category/popular-recipes");
  };

  return (
    <>
      <MainPageRecipesContent
        sectionId="popular"
        title="Najpopularniejsze przepisy"
        array={popular}
        handleClick={handleClick}
        addButton={true}
      />
    </>
  );
};
