import React, { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { useParams } from "react-router-dom";
import { Container, Spinner } from "react-bootstrap";
import { StyledH2 } from "../../styles/StyledH2";
import { RecipesGroup } from "./main_page_recipes/RecipesGroup";

export const FilterRecipes = () => {
  const { recipes } = UserAuth();
  const { categoryName } = useParams();
  const [filteredList, setFilteredList] = useState([]);
  const checkDate = (date) => new Date(date);

  const categories = {
    "newest-recipes": "Najnowsze przepisy",
    soups: "Zupy",
    desserts: "Desery",
    "popular-recipes": "Najpopularniejsze przepisy",
  };

  useEffect(() => {
    switch (categories[categoryName]) {
      case "Najnowsze przepisy":
        const newest = [...recipes].sort(
          (a, b) => checkDate(b.createdAt) - checkDate(a.createdAt)
        );
        setFilteredList(newest);
        break;

      case "Zupy":
        const soups = [...recipes]
          .filter((recipe) => recipe.category === "Zupy")
          .sort((a, b) => checkDate(b.createdAt) - checkDate(a.createdAt));
        setFilteredList(soups);
        break;

      case "Desery":
        const desserts = [...recipes]
          .filter((recipe) => recipe.category === "Desery")
          .sort((a, b) => checkDate(b.createdAt) - checkDate(a.createdAt));
        setFilteredList(desserts);
        break;

      case "Najpopularniejsze przepisy":
        const mostPopular = [...recipes].sort(
          (a, b) => checkDate(b.createdAt) - checkDate(a.createdAt)
        );
        setFilteredList(mostPopular);
        break;
    }
  }, [categoryName, recipes]);

  console.log(filteredList);
  return (
    <>
      {recipes ? (
        <section>
          <Container>
            <RecipesGroup
              title={categories[categoryName]}
              array={filteredList}
            />
          </Container>
        </section>
      ) : (
        <Spinner />
      )}
    </>
  );
};
