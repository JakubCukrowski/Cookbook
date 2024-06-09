import React, { useEffect, useState } from "react";
import { StyledH2 } from "../assets/styles/StyledH2";
import { useSearchParams } from "react-router-dom";
import { Container, Spinner } from "react-bootstrap";
import { RecipesGroup } from "../components/RecipesGroup";
import { SpinnerContainer } from "../assets/styles/Containers";
import { startWithUpper } from "../helpers/helpers";
import { RecipesProvider } from "../context/RecipesContext";

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
          <Spinner />
        </SpinnerContainer>
      ) : (
        <>
          <StyledH2>
            Przepisy z tagiem <strong style={{color: '#e19f25'}}>{startWithUpper(tag)}</strong>{" "}
          </StyledH2>
          <Container>
            <RecipesGroup array={recipesByTags} />
          </Container>
        </>
      )}
    </section>
  );
};
