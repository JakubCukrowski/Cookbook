import React, { useEffect, useState } from "react";
import { UserAuth } from "../../../context/AuthContext";
import { RecipesGroup } from "../../../components/RecipesGroup";
import { Link, useNavigate } from "react-router-dom";
import { StyledH2 } from "../../../assets/styles/StyledH2";
import { Typography } from "@mui/material";

export const MainDishes = () => {
  const { recipes } = UserAuth();
  const navigate = useNavigate();
  const [mainDishes, setMainDishes] = useState([]);

  useEffect(() => {
    const filterAndSort = [...recipes]
      .filter((recipe) => recipe.category === "Dania główne")
      .sort((a, b) => b.likedBy.length - a.likedBy.length);
    setMainDishes(filterAndSort);
  }, [recipes]);

  const handleClick = () => {
    navigate("/category/main-dishes");
  };

  return (
    <section id="main_dishes">
      <StyledH2>Dania główne</StyledH2>
      {mainDishes.length > 0 ? (
        <RecipesGroup
          array={mainDishes}
          onClick={handleClick}
          addButton={true}
          sliceBy={4}
        />
      ) : (
        <Typography variant="h6" textAlign="center">
          Obecnie brak przepisów w tej kategorii <br /> <Link to="signin">Zaloguj się</Link> i dodaj
          przepis
        </Typography>
      )}
    </section>
  );
};
