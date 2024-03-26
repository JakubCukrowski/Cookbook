import React, { useEffect, useState } from "react";
import { StyledH2 } from "../../../styles/StyledH2";
import { useSearchParams } from "react-router-dom";
import { UserAuth } from "../../../context/AuthContext";
import { Container, Spinner } from "react-bootstrap";
import { RecipesGroup } from "../main_page_recipes/RecipesGroup";
import { SpinnerContainer } from "../../../styles/Containers";

export const SearchedTag = () => {
  const { recipes } = UserAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const tag = searchParams.get("tag");
  const [recipesByTags, setRecipesByTags] = useState([]);

  const startsFromUpper = (tag) =>
    tag.split("").splice(0, 1).join("").toUpperCase() +
    tag.split("").splice(1, tag.length).join("");

  useEffect(() => {
    const filterByTags = recipes.filter((recipe) => recipe.tags.includes(tag));
    setRecipesByTags(filterByTags);
  }, [recipes]);

  return (
    <section>
      {recipesByTags.length === 0 ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      ) : (
        <>
          <StyledH2>
            Przepisy z tagiem <strong style={{color: '#e19f25'}}>{startsFromUpper(tag)}</strong>{" "}
          </StyledH2>
          <Container>
            <RecipesGroup array={recipesByTags} />
          </Container>
        </>
      )}
    </section>
  );
};
