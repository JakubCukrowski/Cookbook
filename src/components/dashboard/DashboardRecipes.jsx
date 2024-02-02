import React from "react";
import { StyledLink } from "../../styles/StyledLink";
import { Container } from "react-bootstrap";

export const DashboardRecipes = ({ linkTo, recipeName, recipeImage }) => {
  return (
    <>
      <div style={{paddingTop: 10, textAlign: "center"}}>
        <span>{recipeName}</span>
        <StyledLink to={`/recipes/${linkTo}`}>
          <Container>
            <img
              src={recipeImage}
              style={{ height: 260, width: 300, borderRadius: 6 }}
            />
          </Container>
        </StyledLink>
      </div>
    </>
  );
};
