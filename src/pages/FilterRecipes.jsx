import React, { useEffect, useState } from "react";
import CircularProgressPage from "../pages/CircularProgressPage";
import { RecipesProvider } from "../context/RecipesContext";
import { useNavigate, useParams } from "react-router-dom";
import {
  CircularProgress,
  Container,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { RecipeStructure } from "../components/RecipeStructure";

export const FilterRecipes = () => {
  const { recipes } = RecipesProvider();
  const { categoryName } = useParams();
  const [filteredList, setFilteredList] = useState([]);
  const [filterRecipes, setFilterRecipes] = useState({
    category: "",
    preparationTime: "Wszystko",
    difficulty: "Wszystko",
  });
  const [recipesVisible, setRecipesVisible] = useState(false);
  const checkDate = (date) => new Date(date);
  const navigate = useNavigate();

  const categories = {
    "newest-recipes": "Najnowsze przepisy",
    "popular-recipes": "Najpopularniejsze przepisy",
    soups: "Zupy",
    desserts: "Desery",
    main_dishes: "Dania główne",
    breakfasts: "Śniadania",
    supper: "Kolacje",
    snacks: "Przekąski",
    beverages: "Napoje",
  };

  const filterByPreparationTime = (array, prepTime) => {
    return array.filter((recipe) => recipe.preparationTime === prepTime);
  };

  const filterByDifficulty = (array, difficulty) => {
    return array.filter((recipe) => recipe.difficulty === difficulty);
  };

  const filterByBoth = (array, prepTime, difficulty) => {
    return array
      .filter((recipe) => recipe.difficulty === difficulty)
      .filter((recipe) => recipe.preparationTime === prepTime);
  };

  const handleFiltering = (array) => {
    if (
      filterRecipes.preparationTime !== "Wszystko" &&
      filterRecipes.difficulty === "Wszystko"
    ) {
      setFilteredList(
        filterByPreparationTime(array, filterRecipes.preparationTime)
      );
    }

    if (
      filterRecipes.preparationTime === "Wszystko" &&
      filterRecipes.difficulty !== "Wszystko"
    ) {
      setFilteredList(filterByDifficulty(array, filterRecipes.difficulty));
    }

    if (
      filterRecipes.preparationTime !== "Wszystko" &&
      filterRecipes.difficulty !== "Wszystko"
    ) {
      setFilteredList(
        filterByBoth(
          array,
          filterRecipes.preparationTime,
          filterRecipes.difficulty
        )
      );
    }
  };

  useEffect(() => {
    setFilterRecipes((prev) => ({
      ...prev,
      category: categoryName,
    }));

    if (categoryName === "newest-recipes") {
      const sortedByCreationDate = [...recipes].sort(
        (recipeA, recipeB) => recipeB.createdAt - recipeA.createdAt
      );
      setFilteredList(sortedByCreationDate);
      handleFiltering(sortedByCreationDate);
    } else if (categoryName === "popular-recipes") {
      const sortByPopular = [...recipes].sort(
        (recipeA, recipeB) => recipeB.likedBy.length - recipeA.likedBy.length
      );
      setFilteredList(sortByPopular);
      handleFiltering(sortByPopular);
    } else {
      const sortedByCategory = [...recipes]
        .sort((recipeA, recipeB) => recipeB.createdAt - recipeA.createdAt)
        .filter((recipe) => recipe.category === categoryName);
      setFilteredList(sortedByCategory);
      handleFiltering(sortedByCategory);
    }
    const timeout = setTimeout(() => {
      setRecipesVisible(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [
    filterRecipes.category,
    filterRecipes.difficulty,
    filterRecipes.preparationTime,
  ]);

  useEffect(() => {
    setFilterRecipes((prev) => ({
      ...prev,
      preparationTime: "Wszystko",
      difficulty: "Wszystko",
    }));
  }, [categoryName]);

  return (
    <>
      {recipes ? (
        <section style={{ padding: "20px 0" }}>
          <Container maxWidth="xl">
            <Grid container columnSpacing={2} rowSpacing={4}>
              <Grid item xs={12}>
                <Typography variant="h4" sx={{ textAlign: "center" }}>
                  {categories[categoryName]}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <form
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}
                >
                  <FormGroup>
                    <InputLabel>Kategoria</InputLabel>
                    <Select
                      value={filterRecipes.category}
                      onChange={(e) => {
                        setRecipesVisible(false);
                        setFilterRecipes((prev) => ({
                          ...prev,
                          category: e.target.value,
                        }));
                      }}
                    >
                      {Object.entries(categories).map((category, index) => (
                        <MenuItem
                          key={index}
                          value={category[0]}
                          onClick={() => navigate(`/category/${category[0]}`)}
                        >
                          {category[1]}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormGroup>
                  <FormGroup>
                    <InputLabel>Czas przygotowania</InputLabel>
                    <Select
                      value={filterRecipes.preparationTime}
                      onChange={(e) => {
                        setRecipesVisible(false);
                        setFilterRecipes((prev) => ({
                          ...prev,
                          preparationTime: e.target.value,
                        }));
                      }}
                    >
                      <MenuItem value={"Wszystko"}>Wszystko</MenuItem>
                      <MenuItem value={30}>Około 30 minut</MenuItem>
                      <MenuItem value={60}>Około 60 minut</MenuItem>
                      <MenuItem value={90}>Około 90 minut</MenuItem>
                      <MenuItem value={"90_and_more"}>
                        90 minut i więcej
                      </MenuItem>
                    </Select>
                  </FormGroup>

                  <FormGroup>
                    <InputLabel>Poziom trudności</InputLabel>
                    <Select
                      value={filterRecipes.difficulty}
                      onChange={(e) => {
                        setRecipesVisible(false);
                        setFilterRecipes((prev) => ({
                          ...prev,
                          difficulty: e.target.value,
                        }));
                      }}
                    >
                      <MenuItem value={"Wszystko"}>Wszystko</MenuItem>
                      <MenuItem value={"easy"}>Łatwy</MenuItem>
                      <MenuItem value={"medium"}>Średni</MenuItem>
                      <MenuItem value={"hard"}>Trudny</MenuItem>
                    </Select>
                  </FormGroup>
                </form>
              </Grid>
              <Grid
                container
                item
                xs={12}
                md={8}
                rowSpacing={2}
                columnSpacing={2}
              >
                {recipesVisible ? (
                  filteredList.length > 0 ? (
                    filteredList.map((recipe, index) => (
                      <Grid item key={index} xs={12} sm={6} lg={4}>
                        <RecipeStructure recipe={recipe} />
                      </Grid>
                    ))
                  ) : (
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography>
                        Nie znaleźliśmy żadnego przepisu spełniającego podane
                        warunki. Spróbuj jeszcze raz.
                      </Typography>
                    </Grid>
                  )
                ) : (
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CircularProgress color="inherit" />
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Container>
        </section>
      ) : (
        <CircularProgressPage />
      )}
    </>
  );
};
