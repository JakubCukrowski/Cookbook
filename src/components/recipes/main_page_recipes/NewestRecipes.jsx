import React, { useEffect, useState } from "react";
import { UserAuth } from "../../../context/AuthContext";
import { RecipesGroup } from "../../../components/RecipesGroup";
import { useNavigate } from "react-router-dom";
import { StyledH2 } from "../../../assets/styles/StyledH2";

export const NewestRecipes = () => {
  const { recipes } = UserAuth();
  const checkDate = (date) => new Date(date);
  const navigate = useNavigate();
  const [sortedRecipes, setSortedRecipes] = useState([]);

  useEffect(() => {
    const sorted = [...recipes].sort(
      (a, b) => checkDate(b.createdAt) - checkDate(a.createdAt)
    );
    setSortedRecipes(sorted);
  }, [recipes]);

  const handleClick = () => {
    navigate("/category/newest-recipes");
  };

  return (
    <section id="newest">
      <StyledH2>Najnowsze przepisy</StyledH2>
      <RecipesGroup
        title="Najnowsze przepisy"
        array={sortedRecipes}
        onClick={handleClick}
        addButton={true}
        sliceBy={4}
      />
    </section>
  );
};
