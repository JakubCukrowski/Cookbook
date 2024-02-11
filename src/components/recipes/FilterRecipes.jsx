import React, { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Container, FormLabel, Spinner } from "react-bootstrap";
import { StyledH2 } from "../../styles/StyledH2";
import { RecipesGroup } from "./main_page_recipes/RecipesGroup";
import { Form } from "react-bootstrap";
import { FormCategory } from "./form_elements/FormCategory";
import { FormDifficulty } from "./form_elements/FormDifficulty";
import { FormPrepTime } from "./form_elements/FormPrepTime";
import {
  FakeSpinnerContainer,
  SpinnerContainer,
} from "../../styles/Containers";

export const FilterRecipes = () => {
  const { recipes } = UserAuth();
  const { categoryName } = useParams();
  const [filteredList, setFilteredList] = useState([]);
  const checkDate = (date) => new Date(date);

  //state for filtering
  const [filterData, setFilterData] = useState({
    category: "",
    prepTime: "",
    difficulty: "",
  });

  const [isSelected, setIsSelected] = useState(false);

  const categories = {
    "newest-recipes": "Najnowsze przepisy",
    soups: "Zupy",
    desserts: "Desery",
    "popular-recipes": "Najpopularniejsze przepisy",
    "main-dish": "Dania główne",
    breakfast: "Śniadania",
    supper: "Kolacje",
    snack: "Przekąski",
    beverage: "Napoje",
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
        setFilteredList([]);
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

      case "Dania główne":
        const mainDishes = [...recipes]
          .filter((recipe) => recipe.category === "Dania główne")
          .sort((a, b) => checkDate(b.createdAt) - checkDate(a.createdAt));
        setFilteredList(mainDishes);
        break;

      case "Kolacje":
        const suppers = [...recipes]
          .filter((recipe) => recipe.category === "Kolacje")
          .sort((a, b) => checkDate(b.createdAt) - checkDate(a.createdAt));
        setFilteredList(suppers);
        break;

      case "Śniadania":
        const breakfasts = [...recipes]
          .filter((recipe) => recipe.category === "Śniadania")
          .sort((a, b) => checkDate(b.createdAt) - checkDate(a.createdAt));
        setFilteredList(breakfasts);
        break;

      case "Przekąski":
        const snacks = [...recipes]
          .filter((recipe) => recipe.category === "Przekąski")
          .sort((a, b) => checkDate(b.createdAt) - checkDate(a.createdAt));
        setFilteredList(snacks);
        break;

      case "Napoje":
        const beverages = [...recipes]
          .filter((recipe) => recipe.category === "Napoje")
          .sort((a, b) => checkDate(b.createdAt) - checkDate(a.createdAt));
        setFilteredList(beverages);
        break;
    }
  }, [categoryName, recipes, filterData]);

  useEffect(() => {
    if (isSelected) {
      const timeout = setTimeout(() => {
        setIsSelected(false);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [isSelected]);

  const navigate = useNavigate();

  const handleChangeCategory = (e) => {
    const arrayFromObject = Object.entries(categories);
    setFilterData((prev) => {
      return {
        ...prev,
        category: e.target.value,
      };
    });
    const filtered = arrayFromObject.filter(
      (category) => category[1] === e.target.value
    );
    navigate(`/category/${filtered[0][0]}`);
    setIsSelected(true);
  };

  return (
    <>
      {recipes ? (
        <section>
          <Container>
            <StyledH2>{categories[categoryName]}</StyledH2>
            <Form>
              <p>Szukanie zaawansowane</p>
              <Container>
                <Form.Label>Kategoria</Form.Label>
                <FormCategory onChange={handleChangeCategory} />
              </Container>
              <Container>
                <FormLabel>Czas przygotowania</FormLabel>
                <FormPrepTime />
              </Container>
              <Container>
                <Form.Label>Poziom trudności</Form.Label>
                <FormDifficulty />
              </Container>
            </Form>
            {!isSelected ? (
              <>
                <RecipesGroup array={filteredList} />
                {filteredList.length === 0 ? <div style={{textAlign: "center", height: 100}}><h5>Brak wyników</h5></div> : null}
              </>
            ) : (
              <FakeSpinnerContainer>
                <Spinner />
              </FakeSpinnerContainer>
            )}
          </Container>
        </section>
      ) : (
        <Spinner />
      )}
    </>
  );
};
