import React, { useEffect, useState } from "react";
import { UserAuth } from "../../../context/AuthContext";
import { RecipesGroup } from "./RecipesGroup";
import { useNavigate } from "react-router-dom";
import { StyledH2 } from "../../../styles/StyledH2";

export const MainDishes = () => {
  const { recipes } = UserAuth();
  const navigate = useNavigate();
  const [mainDishes, setMainDishes] = useState([]);

  useEffect(() => {
    const filterAndSort = [...recipes]
      .filter((recipe) => recipe.category === "Dania główne")
      .sort((a, b) => b.likedBy.length - a.likedBy.length);
    setMainDishes(filterAndSort)
  }, [recipes]);

  const handleClick = () => {
    navigate("/category/main-dishes");
  };

  return (
    <>
      <StyledH2>Dania główne</StyledH2>
      <RecipesGroup
        array={mainDishes}
        onClick={handleClick}
        addButton={true}
        sliceBy={4}
      />
    </>
  );
};
