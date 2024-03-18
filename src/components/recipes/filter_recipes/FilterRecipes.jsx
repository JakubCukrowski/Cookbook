import React, { useEffect, useState } from "react";
import { UserAuth } from "../../../context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { Container, FormLabel, Spinner } from "react-bootstrap";
import { StyledH2 } from "../../../styles/StyledH2";
import { RecipesGroup } from "../main_page_recipes/RecipesGroup";
import { Form } from "react-bootstrap";
import { FormCategory } from "../form_elements/FormCategory";
import { FormDifficulty } from "../form_elements/FormDifficulty";
import { FormPrepTime } from "../form_elements/FormPrepTime";
import { FakeSpinnerContainer } from "../../../styles/Containers";
import { FilterFormStyle } from "../RecipesStyles";
import { FilterBootstrapPagination } from "./FilterBootstrapPagination";

export const FilterRecipes = () => {
  const { recipes } = UserAuth();
  const { categoryName } = useParams();
  const [filteredList, setFilteredList] = useState([]);
  const checkDate = (date) => new Date(date);

  //state for filtering
  const [filterData, setFilterData] = useState({
    category: "",
    prepTime: "Wszystko",
    difficulty: "all",
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
        (element) => element.preparationTime === filterData.prepTime
      );
    };

    const filterRecipesByDifficulty = (array) => {
      return array.filter(
        (element) => element.difficulty === filterData.difficulty
      );
    };

    let category = categories[categoryName];
    let prepTime = filterData.prepTime;
    let difficulty = filterData.difficulty;

    if (
      category === "Najnowsze przepisy" &&
      prepTime === "Wszystko" &&
      difficulty === "all"
    ) {
      const newest = sortRecipes([...recipes].splice(0, 20));
      setFilteredList(newest);
    } else if (
      category === "Najnowsze przepisy" &&
      prepTime !== "Wszystko" &&
      difficulty === "all"
    ) {
      const newestByPrepTime = filterRecipesByPrepTime([...recipes]);
      const newestSorted = sortRecipes(newestByPrepTime).splice(0, 20);
      setFilteredList(newestSorted);
    } else if (
      category === "Najnowsze przepisy" &&
      prepTime === "Wszystko" &&
      difficulty !== "all"
    ) {
      const newestByDifficulty = filterRecipesByDifficulty([...recipes]).splice(0, 20);
      setFilteredList(newestByDifficulty);
    } else if (
      category === "Najnowsze przepisy" &&
      filterData.prepTime !== "Wszystko" &&
      filterData.difficulty !== "all"
    ) {
      const newestOfPrepAndDifficulty = filterRecipesByPrepTime(
        filterRecipesByDifficulty([...recipes]).splice(0, 20)
      );
      setFilteredList(newestOfPrepAndDifficulty);
    }

    if (
      category === "Najpopularniejsze przepisy" &&
      prepTime === "Wszystko" &&
      difficulty === "all"
    ) {
      const mostPopular = [...recipes].sort((a, b) => b.likedBy.length - a.likedBy.length).splice(0, 20);
      setFilteredList(mostPopular);
    } else if (
      category === "Najpopularniejsze przepisy" &&
      prepTime !== "Wszystko" &&
      difficulty === "all"
    ) {
      const popularByPrepTime = filterRecipesByPrepTime([...recipes]);
      const popularSorted = popularByPrepTime.sort((a, b) => b.likedBy.length - a.likedBy.length).splice(0, 20);
      setFilteredList(popularSorted);
    } else if (
      category === "Najpopularniejsze przepisy" &&
      prepTime === "Wszystko" &&
      difficulty !== "all"
    ) {
      const newestByDifficulty = filterRecipesByDifficulty([...recipes]);
      const newestSorted = newestByDifficulty.sort((a, b) => b.likedBy.length - a.likedBy.length).splice(0, 20)
      setFilteredList(newestSorted);
    } else if (
      category === "Najpopularniejsze przepisy" &&
      filterData.prepTime !== "Wszystko" &&
      filterData.difficulty !== "all"
    ) {
      const newestOfPrepAndDifficulty = filterRecipesByPrepTime(
        filterRecipesByDifficulty([...recipes].sort((a, b) => b.likedBy.length - a.likedBy.length)).splice(0, 20)
      );
      setFilteredList(newestOfPrepAndDifficulty);
    }

    if (
      category !== "Najpopularniejsze przepisy" &&
      category !== "Najnowsze przepisy" &&
      prepTime === "Wszystko" &&
      difficulty === "all"
    ) {
      const filterByCategory = [...recipes].filter(
        (recipe) => recipe.category === category
      );
      setFilteredList(filterByCategory);
    } else if (
      category !== "Najpopularniejsze przepisy" &&
      category !== "Najnowsze przepisy" &&
      prepTime !== "Wszystko" &&
      difficulty === "all"
    ) {
      const filterByCategory = [...recipes].filter(
        (recipe) => recipe.category === category
      );
      const filteredByPrepTime = filterRecipesByPrepTime(filterByCategory);
      setFilteredList(filteredByPrepTime);
    } else if (
      category !== "Najpopularniejsze przepisy" &&
      category !== "Najnowsze przepisy" &&
      prepTime !== "Wszystko" &&
      difficulty !== "all"
    ) {
      const filterByCategory = [...recipes].filter(
        (recipe) => recipe.category === categories[categoryName]
      );
      const filterByPrepAndDifficulty = filterRecipesByPrepTime(
        filterRecipesByDifficulty(filterByCategory)
      );
      setFilteredList(filterByPrepAndDifficulty);
    } else if (
      category !== "Najpopularniejsze przepisy" &&
      category !== "Najnowsze przepisy" &&
      prepTime === "Wszystko" &&
      difficulty !== "all"
    ) {
      const filterByCategory = [...recipes].filter(
        (recipe) => recipe.category === category
      );
      const filterByDifficulty = filterRecipesByDifficulty(filterByCategory);
      setFilteredList(filterByDifficulty);
    }

    if (isFilterSelected) {
      const timeout = setTimeout(() => {
        setIsFilterSelected(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [
    isFilterSelected,
    recipes,
  ]);

  const handleChangeCategory = (e) => {
    setFilterData((prev) => {
      return {
        ...prev,
        prepTime: "Wszystko",
        difficulty: "all",
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

  const handleDifficulty = (e) => {
    console.log(e.target.value);
    setFilterData((prev) => {
      return {
        ...prev,
        difficulty: e.target.value,
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
              <h4>
                <strong>Szukanie zaawansowane</strong>
              </h4>
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
                    <FormDifficulty
                      everything={true}
                      onChange={handleDifficulty}
                      value={filterData.difficulty}
                    />
                  </Container>
                </>
              ) : null}
            </FilterFormStyle>
            {!isFilterSelected ? (
              <>
                <FilterBootstrapPagination array={filteredList} />
                {filteredList.length === 0 ? (
                  <div style={{ textAlign: "center", minHeight: 400 }}>
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
