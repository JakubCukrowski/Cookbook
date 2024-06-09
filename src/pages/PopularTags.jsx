import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RecipesGroup } from "../components/RecipesGroup";
import { RecipesProvider } from "../context/RecipesContext";
import { Typography, Box } from "@mui/material";
import { startWithUpper } from "../helpers/helpers";

export const PopularTags = () => {
  const tagName = useParams();
  const { recipes } = RecipesProvider();
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const filterRecipes = [...recipes]
      .filter((recipe) => recipe.tags.includes(tagName.tagName))
      .sort((a, b) => b.likedBy.length - a.likedBy.length)
      .filter((recipe) => recipe.likedBy.length > 0);
    setFiltered(filterRecipes);
  }, [recipes]);

  return (
    <section>
      <Box sx={{padding: "20px"}}>
        <Typography variant="h4" sx={{ textAlign: "center", marginBottom: "20px" }}>
          Najpopularniejsze przepisy z tagiem{" "}
          <strong>{startWithUpper(tagName.tagName)}</strong>
        </Typography>
        <RecipesGroup array={filtered} />
      </Box>
    </section>
  );
};
