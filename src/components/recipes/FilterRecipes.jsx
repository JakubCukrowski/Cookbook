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
import { FakeSpinnerContainer } from "../../styles/Containers";

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

  const [isFilterSelected, setIsFilterSelected] = useState(false);

  const navigate = useNavigate();

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

    switch (filterData.prepTime) {
      case "15":
        const prepTimeIs15 = [...recipes].filter(
          (recipe) =>
            recipe.preparationTime === "15" &&
            recipe.category === filterData.category
        );
        setFilteredList(prepTimeIs15);
        break;

      case "30":
        const prepTimeIs30 = [...recipes].filter(
          (recipe) =>
            recipe.preparationTime === "30" &&
            recipe.category === filterData.category
        );
        setFilteredList(prepTimeIs30);
        break;

      case "60":
        const prepTimeIs60 = [...recipes].filter(
          (recipe) =>
            recipe.preparationTime === "60" &&
            recipe.category === filterData.category
        );
        setFilteredList(prepTimeIs60);
        break;

      case "90":
        const prepTimeIs90 = [...recipes].filter(
          (recipe) =>
            recipe.preparationTime === "90" &&
            recipe.category === filterData.category
        );
        setFilteredList(prepTimeIs90);
        break;

      case "more":
        const prepTimeIsMoreThan90 = [...recipes].filter(
          (recipe) => recipe.preparationTime === "more"
        );
        setFilteredList(prepTimeIsMoreThan90);
        break;
    }
  }, [categoryName, recipes, filterData]);

  useEffect(() => {
    if (isFilterSelected) {
      const timeout = setTimeout(() => {
        setIsFilterSelected(false);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [isFilterSelected]);

  console.log(filteredList);

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
    setIsFilterSelected(true);
  };

  const handlePrepTime = (e) => {
    setFilterData((prev) => {
      return {
        ...prev,
        prepTime: e.target.value,
      };
    });
    setIsFilterSelected(true);
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
                <Form.Label htmlFor="category_filter">Kategoria</Form.Label>
                <FormCategory
                  id="category_filter"
                  value={filterData.category}
                  onChange={handleChangeCategory}
                  optionDisabled={filterData.category !== ""}
                />
              </Container>
              {filterData.category !== "" ? (
                <>
                  {" "}
                  <Container>
                    <FormLabel htmlFor="prep_filter">
                      Czas przygotowania
                    </FormLabel>
                    <FormPrepTime id="prep_filter" onChange={handlePrepTime} />
                  </Container>
                  <Container>
                    <Form.Label>Poziom trudności</Form.Label>
                    <FormDifficulty />
                  </Container>
                </>
              ) : null}
            </Form>
            {!isFilterSelected ? (
              <>
                <RecipesGroup array={filteredList} />
                {filteredList.length === 0 ? (
                  <div style={{ textAlign: "center", height: 100 }}>
                    <h5>Brak wyników</h5>
                  </div>
                ) : null}
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
