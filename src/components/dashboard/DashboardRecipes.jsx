import React from "react";
import { StyledLink } from "../../styles/StyledLink";
import { Container } from "react-bootstrap";
import {DashboardRecipeImage} from './DashboardRecipeImage'

export const DashboardRecipes = ({ linkTo, recipeName, recipeImage }) => {
  return (
    <>
      <div style={{paddingTop: 10, textAlign: "center"}}>
        <span>{recipeName}</span>
        <StyledLink to={`/recipes/${linkTo}`}>
          <Container>
            <DashboardRecipeImage
              src={recipeImage}
              alt="recipe"
            />
          </Container>
        </StyledLink>
      </div>
    </>
  );
};
