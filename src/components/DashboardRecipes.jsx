import React from "react";
import { StyledLink } from "../styles/StyledLink";
import { Row, Col, Image } from "react-bootstrap";

export const DashboardRecipes = ({ linkTo, recipeName, recipeImage }) => {
  return (
    <>
      <span>{recipeName}</span>
      <StyledLink to={`/recipes/${linkTo}`}>
        <Row
          style={{
            justifyContent: "center",
            marginBottom: 10,
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Col xs={6} md={4}>
            <Image src={recipeImage} thumbnail />
          </Col>
        </Row>
      </StyledLink>
    </>
  );
};
