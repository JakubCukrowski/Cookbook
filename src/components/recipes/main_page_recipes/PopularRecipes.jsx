import React from "react";
import { UserAuth } from "../../../context/AuthContext";
import { RecipesGroup } from "../../../components/RecipesGroup";
import { Link, useNavigate } from "react-router-dom";
import { StyledH2 } from "../../../assets/styles/StyledH2";
import { Typography } from "@mui/material";

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
    <section id="popular">
      <StyledH2>Najpopularniejsze przepisy</StyledH2>
      {popular.length > 0 ? (
        <RecipesGroup
          title="Najpopularniejsze przepisy"
          array={popular}
          onClick={handleClick}
          addButton={true}
          sliceBy={4}
        />
      ) : (
        <Typography variant="h6" textAlign="center">
          Obecnie brak przepisów w tej kategorii <br /> <Link to="/signin">Zaloguj się</Link> i dodaj
          przepis
        </Typography>
      )}
    </section>
  );
};
