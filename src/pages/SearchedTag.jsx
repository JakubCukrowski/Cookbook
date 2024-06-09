import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { RecipesGroup } from "../components/RecipesGroup";
import { SpinnerContainer } from "../assets/styles/Containers";
import { startWithUpper } from "../helpers/helpers";
import { RecipesProvider } from "../context/RecipesContext";
import { Box, CircularProgress, Container, Typography } from "@mui/material";

export const SearchedTag = () => {
  const { recipes } = RecipesProvider();
  const [searchParams, setSearchParams] = useSearchParams();
  const tag = searchParams.get("tag");
  const [recipesByTags, setRecipesByTags] = useState([]);

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
            <RecipesGroup array={recipesByTags} />
          </Box>
        </>
      )}
    </section>
  );
};
