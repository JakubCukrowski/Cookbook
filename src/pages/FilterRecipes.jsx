import React, { useEffect, useState } from "react";
import CircularProgressPage from "../pages/CircularProgressPage";
import { RecipesProvider } from "../context/RecipesContext";
import { useNavigate, useParams } from "react-router-dom";
import {
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
  const checkDate = (date) => new Date(date);
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

  useEffect(() => {
    setFilterRecipes((prev) => ({
      ...prev,
      category: categoryName,
    }));

    if (categoryName === "newest-recipes") {
      setFilteredList(
        recipes.sort(
          (recipeA, recipeB) => recipeB.createdAt - recipeA.createdAt
        )
      );
    } else if (categoryName === "popular-recipes") {
      setFilteredList(
        recipes.sort(
          (recipeA, recipeB) => recipeB.likedBy.length - recipeA.likedBy.length
        )
      );
    } else {
      setFilteredList(
        recipes.filter((recipe) => recipe.category === categoryName)
      );
    }
  }, [categoryName]);

  return (
    <>
      {recipes ? (
        <section style={{ padding: "20px 0" }}>
          <Container maxWidth="xl">
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              {categories[categoryName]}
            </Typography>
            <Grid container columnSpacing={2} rowSpacing={4}>
              <Grid item xs={12} md={4}>
                <form>
                  <FormGroup>
                    <InputLabel>Kategoria</InputLabel>
                    <Select
                      value={filterRecipes.category}
                      onChange={(e) =>
                        setFilterRecipes((prev) => ({
                          ...prev,
                          category: e.target.value,
                        }))
                      }
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
                      onChange={(e) =>
                        setFilterRecipes((prev) => ({
                          ...prev,
                          preparationTime: e.target.value,
                        }))
                      }
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
                      onChange={(e) =>
                        setFilterRecipes((prev) => ({
                          ...prev,
                          difficulty: e.target.value,
                        }))
                      }
                    >
                      <MenuItem value={"Wszystko"}>Wszystko</MenuItem>
                      <MenuItem value={30}>Łatwy</MenuItem>
                      <MenuItem value={60}>Średni</MenuItem>
                      <MenuItem value={90}>Trudny</MenuItem>
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
                {filteredList.map((recipe, index) => (
                  <Grid item key={index} xs={12} sm={6} lg={4}>
                    <RecipeStructure recipe={recipe}/>
                  </Grid>
                ))}
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

// //filtering
// useEffect(() => {
//   setFilterData((prev) => {
//     return {
//       ...prev,
//       category: categories[categoryName],
//     };
//   });

//   const sortRecipes = (array) => {
//     return array.sort(
//       (a, b) => checkDate(b.createdAt) - checkDate(a.createdAt)
//     );
//   };

//   const filterRecipesByPrepTime = (array) => {
//     return array.filter(
//       (element) => element.preparationTime === filterData.prepTime
//     );
//   };

//   const filterRecipesByDifficulty = (array) => {
//     return array.filter(
//       (element) => element.difficulty === filterData.difficulty
//     );
//   };

//   let category = categories[categoryName];
//   let prepTime = filterData.prepTime;
//   let difficulty = filterData.difficulty;

//   if (
//     category === "Najnowsze przepisy" &&
//     prepTime === "Wszystko" &&
//     difficulty === "all"
//   ) {
//     const newest = sortRecipes([...recipes].splice(0, 20));
//     setFilteredList(newest);
//   } else if (
//     category === "Najnowsze przepisy" &&
//     prepTime !== "Wszystko" &&
//     difficulty === "all"
//   ) {
//     const newestByPrepTime = filterRecipesByPrepTime([...recipes]);
//     const newestSorted = sortRecipes(newestByPrepTime).splice(0, 20);
//     setFilteredList(newestSorted);
//   } else if (
//     category === "Najnowsze przepisy" &&
//     prepTime === "Wszystko" &&
//     difficulty !== "all"
//   ) {
//     const newestByDifficulty = filterRecipesByDifficulty([...recipes]).splice(
//       0,
//       20
//     );
//     setFilteredList(newestByDifficulty);
//   } else if (
//     category === "Najnowsze przepisy" &&
//     filterData.prepTime !== "Wszystko" &&
//     filterData.difficulty !== "all"
//   ) {
//     const newestOfPrepAndDifficulty = filterRecipesByPrepTime(
//       filterRecipesByDifficulty([...recipes]).splice(0, 20)
//     );
//     setFilteredList(newestOfPrepAndDifficulty);
//   }

//   if (
//     category === "Najpopularniejsze przepisy" &&
//     prepTime === "Wszystko" &&
//     difficulty === "all"
//   ) {
//     const mostPopular = [...recipes]
//       .sort((a, b) => b.createdAt - a.createdAt)
//       .sort((a, b) => b.likedBy.length - a.likedBy.length)
//       .splice(0, 90);
//     setFilteredList(mostPopular);
//   } else if (
//     category === "Najpopularniejsze przepisy" &&
//     prepTime !== "Wszystko" &&
//     difficulty === "all"
//   ) {
//     const popularByPrepTime = filterRecipesByPrepTime([...recipes]);
//     const popularSorted = popularByPrepTime
//       .sort((a, b) => b.likedBy.length - a.likedBy.length)
//       .splice(0, 90);
//     setFilteredList(popularSorted);
//   } else if (
//     category === "Najpopularniejsze przepisy" &&
//     prepTime === "Wszystko" &&
//     difficulty !== "all"
//   ) {
//     const newestByDifficulty = filterRecipesByDifficulty([...recipes]);
//     const newestSorted = newestByDifficulty
//       .sort((a, b) => b.likedBy.length - a.likedBy.length)
//       .splice(0, 90);
//     setFilteredList(newestSorted);
//   } else if (
//     category === "Najpopularniejsze przepisy" &&
//     filterData.prepTime !== "Wszystko" &&
//     filterData.difficulty !== "all"
//   ) {
//     const newestOfPrepAndDifficulty = filterRecipesByPrepTime(
//       filterRecipesByDifficulty(
//         [...recipes].sort((a, b) => b.likedBy.length - a.likedBy.length)
//       ).splice(0, 90)
//     );
//     setFilteredList(newestOfPrepAndDifficulty);
//   }

//   if (
//     category !== "Najpopularniejsze przepisy" &&
//     category !== "Najnowsze przepisy" &&
//     prepTime === "Wszystko" &&
//     difficulty === "all"
//   ) {
//     const filterByCategory = [...recipes].filter(
//       (recipe) => recipe.category === category
//     );

//     setFilteredList(sortRecipes(filterByCategory));
//   } else if (
//     category !== "Najpopularniejsze przepisy" &&
//     category !== "Najnowsze przepisy" &&
//     prepTime !== "Wszystko" &&
//     difficulty === "all"
//   ) {
//     const filterByCategory = [...recipes].filter(
//       (recipe) => recipe.category === category
//     );
//     const filteredByPrepTime = filterRecipesByPrepTime(filterByCategory);
//     setFilteredList(sortRecipes(filteredByPrepTime));
//   } else if (
//     category !== "Najpopularniejsze przepisy" &&
//     category !== "Najnowsze przepisy" &&
//     prepTime !== "Wszystko" &&
//     difficulty !== "all"
//   ) {
//     const filterByCategory = [...recipes].filter(
//       (recipe) => recipe.category === categories[categoryName]
//     );
//     const filterByPrepAndDifficulty = filterRecipesByPrepTime(
//       filterRecipesByDifficulty(filterByCategory)
//     );
//     setFilteredList(sortRecipes(filterByPrepAndDifficulty));
//   } else if (
//     category !== "Najpopularniejsze przepisy" &&
//     category !== "Najnowsze przepisy" &&
//     prepTime === "Wszystko" &&
//     difficulty !== "all"
//   ) {
//     const filterByCategory = [...recipes].filter(
//       (recipe) => recipe.category === category
//     );
//     const filterByDifficulty = filterRecipesByDifficulty(filterByCategory);
//     setFilteredList(sortRecipes(filterByDifficulty));
//   }

//   if (isFilterSelected) {
//     const timeout = setTimeout(() => {
//       setIsFilterSelected(false);
//     }, 500);
//     return () => clearTimeout(timeout);
//   }
// }, [isFilterSelected, recipes]);

// const handleChangeCategory = (e) => {
//   setFilterData((prev) => {
//     return {
//       ...prev,
//       prepTime: "Wszystko",
//       difficulty: "all",
//     };
//   });
//   const arrayFromObject = Object.entries(categories);
//   setFilterData((prev) => {
//     return {
//       ...prev,
//       category: e.target.value,
//     };
//   });
//   const filtered = arrayFromObject.filter(
//     (category) => category[1] === e.target.value
//   );
//   navigate(`/category/${filtered[0][0]}`);
//   setIsFilterSelected(true);
// };

// const handlePrepTime = (e) => {
//   setFilterData((prev) => {
//     return {
//       ...prev,
//       prepTime: e.target.value,
//     };
//   });
//   setIsFilterSelected(true);
// };

// const handleDifficulty = (e) => {
//   setFilterData((prev) => {
//     return {
//       ...prev,
//       difficulty: e.target.value,
//     };
//   });
//   setIsFilterSelected(true);
// };
