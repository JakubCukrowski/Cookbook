import React, { useEffect, useState } from "react";
import { UserAuth } from "../../../context/AuthContext";
import { RecipesGroup } from "../../../components/RecipesGroup";
import { Link, useNavigate } from "react-router-dom";
import { StyledH2 } from "../../../assets/styles/StyledH2";
import { Typography } from "@mui/material";

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
    <section id="desserts" className="lax_m">
      <StyledH2>Desery</StyledH2>
      {sortedRecipes.length > 0 ? (
        <RecipesGroup
          title="Desery"
          array={sortedRecipes}
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
