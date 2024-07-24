import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Fuse from "fuse.js";
import { NewestRecipes } from "../components/recipes/main_page_recipes/NewestRecipes";
import { PopularRecipes } from "../components/recipes/main_page_recipes/PopularRecipes";
import { Desserts } from "../components/recipes/main_page_recipes/Desserts";
import { RecipeStructure } from "../components/RecipeStructure";
import CircularProgressPage from "./CircularProgressPage";
import { Container, Grid, Typography } from "@mui/material";
import { RecipesProvider } from "../context/RecipesContext";

export const RecipesPage = () => {
  const {
    queryResults,
    updateQueryText,
    queryText,
    recipes,
    updateQueryResults,
  } = RecipesProvider();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isDownloaded, setIsDownloaded] = useState(false);

  const query = searchParams.get("query");

  useEffect(() => {
    updateQueryText(query);

    const fuse = new Fuse(recipes, {
      keys: ["name", ["tags"]],
      threshold: 0.3,
      includeMatches: true,
    });

    //results are pushed to queryresults state
    const result = fuse.search(query).map((res) => res.item);

    updateQueryResults(result);
    const timeout = setTimeout(() => {
      return setIsDownloaded(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, [queryText, recipes]);

  return (
    <>
      {isDownloaded ? (
        <section>
          <Container maxWidth='xl' sx={{paddingBottom: '20px'}}>
            <Typography variant="h4" sx={{textAlign: "center", padding: '20px 0'}}>
              {queryText.length > 0 && queryResults.length > 0
                ? `Przepisy zawierające: ${query}`
                : `Brak wyników dla: ${query}`}
            </Typography>
            <Grid container columnSpacing={4} rowSpacing={4}>
              {queryResults.map((recipe, index) => (
                <RecipeStructure recipe={recipe} key={index} />
              ))}
            </Grid>
            {queryResults.length > 0 ? null : (
              <>
                <PopularRecipes />
                <NewestRecipes />
                <Desserts />
              </>
            )}
          </Container>
        </section>
      ) : (
        <CircularProgressPage />
      )}
    </>
  );
};
