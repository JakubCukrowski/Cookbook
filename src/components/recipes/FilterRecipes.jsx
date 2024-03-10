import React, { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { Container, FormLabel, Spinner } from "react-bootstrap";
import { StyledH2 } from "../../styles/StyledH2";
import { RecipesGroup } from "./main_page_recipes/RecipesGroup";
import { Form } from "react-bootstrap";
import { FormCategory } from "./form_elements/FormCategory";
import { FormDifficulty } from "./form_elements/FormDifficulty";
import { FormPrepTime } from "./form_elements/FormPrepTime";
import { FakeSpinnerContainer } from "../../styles/Containers";
import { FilterFormStyle } from "./RecipesStyles";

export const FilterRecipes = () => {
  const { recipes } = UserAuth();
  const { categoryName } = useParams();
  const [filteredList, setFilteredList] = useState([]);
  const checkDate = (date) => new Date(date);

  //state for filtering
  const [filterData, setFilterData] = useState({
    category: "",
    prepTime: "Wszystko",
    difficulty: "Wszystko",
  });

  const [isFilterSelected, setIsFilterSelected] = useState(true);

  const navigate = useNavigate();

  const categories = {
    "newest-recipes": "Najnowsze przepisy",
    "popular-recipes": "Najpopularniejsze przepisy",
    soups: "Zupy",
    desserts: "Desery",
    "main-dishes": "Dania główne",
    breakfasts: "Śniadania",
    supper: "Kolacje",
    snacks: "Przekąski",
    beverages: "Napoje",
  };

  const preparationTimes = [
    "Wszystko",
    "15 minut",
    "30 minut",
    "60 minut",
    "90 minut",
  ];

  //filtering
  useEffect(() => {
    setFilterData((prev) => {
      return {
        ...prev,
        category: categories[categoryName],
      };
    });

    const sortRecipes = (array) => {
      return array.sort(
        (a, b) => checkDate(b.createdAt) - checkDate(a.createdAt)
      );
    };

    const filterRecipesByPrepTime = (array) => {
      return array.filter(
        (element) =>
          element.preparationTime ===
          filterData.prepTime
      );
    };

    if (
      categories[categoryName] === "Najnowsze przepisy" &&
      filterData.prepTime === "Wszystko"
    ) {
      const newest = sortRecipes([...recipes]);
      setFilteredList(newest);
    } else if (
      categories[categoryName] === "Najnowsze przepisy" &&
      filterData.prepTime !== "Wszystko"
    ) {
      const newestByPrepTime = filterRecipesByPrepTime([...recipes]);
      const newestSorted = sortRecipes(newestByPrepTime);
      setFilteredList(newestSorted);
    }

    if (
      categories[categoryName] === "Najpopularniejsze przepisy" &&
      filterData.prepTime === "Wszystko"
    ) {
      const popular = [...recipes].sort((a, b) => b.likes - a.likes)
      setFilteredList(popular);
    } else if (
      categories[categoryName] === "Najpopularniejsze przepisy" &&
      filterData.prepTime !== "Wszystko"
    ) {
      const popularByPrepTime = filterRecipesByPrepTime([...recipes])
      const popularSorted = popularByPrepTime.sort((a, b) => b.likes - a.likes);
      setFilteredList(popularSorted);
    }

    if (
      categories[categoryName] !== "Najpopularniejsze przepisy" &&
      categories[categoryName] !== "Najnowsze przepisy" &&
      filterData.prepTime === "Wszystko"
    ) {
      const filterByCategory = [...recipes].filter(recipe => recipe.category === categories[categoryName]);
      setFilteredList(filterByCategory);
    } else if (
      categories[categoryName] !== "Najpopularniejsze przepisy" &&
      categories[categoryName] !== "Najnowsze przepisy" &&
      filterData.prepTime !== "Wszystko"
    ) {
      const filterByCategory = [...recipes].filter(recipe => recipe.category === categories[categoryName])
      console.log(filterByCategory);
      const filteredByPrepTime = filterRecipesByPrepTime(filterByCategory);
      setFilteredList(filteredByPrepTime);
    }

    if (isFilterSelected) {
      const timeout = setTimeout(() => {
        setIsFilterSelected(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isFilterSelected, categories[categoryName], recipes]);

  const handleChangeCategory = (e) => {
    setFilterData((prev) => {
      return {
        ...prev,
        prepTime: "Wszystko",
      };
    });
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
            <FilterFormStyle>
              <p>Szukanie zaawansowane</p>
              <Container>
                <Form.Label htmlFor="category_filter">Kategoria</Form.Label>
                <FormCategory
                  id="category_filter"
                  value={categories[categoryName]}
                  onChange={handleChangeCategory}
                  filterIncluded={true}
                  array={Object.values(categories)}
                />
              </Container>
              {filterData.category !== "" ? (
                <>
                  {" "}
                  <Container>
                    <FormLabel htmlFor="prep_filter">
                      Czas przygotowania
                    </FormLabel>
                    <FormPrepTime
                      id="prep_filter"
                      onChange={handlePrepTime}
                      array={preparationTimes}
                      value={filterData.prepTime}
                    />
                  </Container>
                  <Container>
                    <Form.Label>Poziom trudności</Form.Label>
                    <FormDifficulty />
                  </Container>
                </>
              ) : null}
            </FilterFormStyle>
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
