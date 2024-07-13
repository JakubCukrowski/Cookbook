import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { OrangeButton } from "../../assets/styles/Buttons";
import { RecipesProvider } from "../../context/RecipesContext";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
`

export const PopularButtons = () => {
  const { recipes } = RecipesProvider();
  const [popularTags, setPopularTags] = useState([]);
  const navigate = useNavigate();

  //filter recipes by likes and tags, out of it create an object with the count of the tag and set it as a popularTags state
  useEffect(() => {
    const onlyTagsFilteredByLikes = recipes
      .filter((recipe) => recipe.tags.length > 0 && recipe.likedBy.length > 0)
      .flatMap((recipe) => recipe.tags);

    const mostPopular = {};

    onlyTagsFilteredByLikes.forEach(
      (tag) => (mostPopular[tag] = (mostPopular[tag] || 0) + 1)
    );

    const arrFromObj = Object.entries(mostPopular);

    const newArr = [];
    for (let i = 0; i < arrFromObj.length; i++) {
      newArr.push({ name: arrFromObj[i][0], count: arrFromObj[i][1] });
    }

    const sortedTags = newArr.sort((a, b) => b.count - a.count).slice(0, 4);
    setPopularTags(sortedTags);
  }, [recipes]);

  return (
    <Box>
      <Typography variant="h4" sx={{textAlign: 'center'}}>Popularne tagi</Typography>

      {popularTags.length > 0 ? (
        <StyledBox>
          {popularTags.map((tag) => (
            <OrangeButton
              onClick={() => navigate(`/popular/${tag.name}`)}
              key={tag.name}
            >
              {tag.name.split("")[0].toUpperCase() +
                tag.name.split("").slice(1, tag.name.length).join("")}
            </OrangeButton>
          ))}
        </StyledBox>
      ) : (
        <Typography color={"white"}>Brak przepisów</Typography>
      )}
    </Box>
  );
};
