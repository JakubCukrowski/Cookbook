import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { RecipeStructure } from "../components/RecipeStructure";
import { SpinnerContainer } from "../assets/styles/Containers";
import { startWithUpper } from "../helpers/helpers";
import { RecipesProvider } from "../context/RecipesContext";
import {
  Box,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";

export const SearchedTag = () => {
  const { recipes } = RecipesProvider();
  const [searchParams, setSearchParams] = useSearchParams();
  const tag = searchParams.get("tag");
  const [recipesByTags, setRecipesByTags] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const filterByTags = recipes.filter((recipe) => recipe.tags.includes(tag));
    setRecipesByTags(filterByTags);
  }, [recipes]);

  return (
    <section>
      {recipesByTags.length === 0 ? (
        <SpinnerContainer>
          <CircularProgress />
        </SpinnerContainer>
      ) : (
        <>
          <Box sx={{ padding: "20px" }}>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", marginBottom: "20px" }}
            >
              Przepisy z tagiem <strong>{startWithUpper(tag)}</strong>{" "}
            </Typography>
            <Grid container columnSpacing={4}>
              {recipesByTags.map((recipe, index) => (
                <RecipeStructure
                  key={index}
                  recipe={recipe}
                  onClick={() => navigate(`/recipes/${recipe.id}`)}
                />
              ))}
            </Grid>
          </Box>
        </>
      )}
    </section>
  );
};
