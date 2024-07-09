import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RecipeStructure } from "../components/RecipeStructure";
import { RecipesProvider } from "../context/RecipesContext";
import { Typography, Box, Grid } from "@mui/material";
import { startWithUpper } from "../helpers/helpers";

export const PopularTags = () => {
  const tagName = useParams();
  const { recipes } = RecipesProvider();
  const [filtered, setFiltered] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const filterRecipes = [...recipes]
      .filter((recipe) => recipe.tags.includes(tagName.tagName))
      .sort((a, b) => b.likedBy.length - a.likedBy.length)
      .filter((recipe) => recipe.likedBy.length > 0);
    setFiltered(filterRecipes);
  }, [recipes]);

  return (
    <section>
      <Box sx={{ padding: "20px" }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginBottom: "20px" }}
        >
          Najpopularniejsze przepisy z tagiem{" "}
          <strong>{startWithUpper(tagName.tagName)}</strong>
        </Typography>
        <Grid container columnSpacing={4}>
          {filtered.map((recipe, index) => (
            <RecipeStructure
              key={index}
              recipe={recipe}
              onClick={() => navigate(`/recipes/${recipe.id}`)}
            />
          ))}
        </Grid>
      </Box>
    </section>
  );
};
