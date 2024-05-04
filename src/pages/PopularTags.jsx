import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { StyledH2 } from "../assets/styles/StyledH2";
import { useParams } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { RecipesGroup } from "../components/RecipesGroup";

export const PopularTags = () => {
  const tagName = useParams();
  const { recipes } = UserAuth();
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const filterRecipes = [...recipes]
      .filter((recipe) => recipe.tags.includes(tagName.tagName))
      .sort((a, b) => b.likedBy.length - a.likedBy.length)
      .filter((recipe) => recipe.likedBy.length > 0);
    setFiltered(filterRecipes);
  }, [recipes]);

  return (
    <Container>
      <StyledH2>Użytkownicy chwalą sobie przepisy z tej kategorii</StyledH2>

      <RecipesGroup array={filtered} />
    </Container>
  );
};
