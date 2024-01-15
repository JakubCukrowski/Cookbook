import React from "react";
import { StyledLink } from "../styles/StyledLink";
import { Row, Col, Image } from "react-bootstrap";

export const DashboardLikedRecipes = ({linkTo, recipeName, recipeImage}) => {
  return (
    <StyledLink to={`/recipes/${linkTo}`}>
      {recipeName}
      <Row style={{ justifyContent: "center", marginBottom: 10 }}>
        <Col xs={6} md={4}>
          <Image src={recipeImage} thumbnail />
        </Col>
      </Row>
    </StyledLink>
  );
};
