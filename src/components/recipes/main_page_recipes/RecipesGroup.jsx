import React from "react";
import { Button, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { StyledCol, StyledDetailsWrapper } from "../RecipesStyles";
import { FlexContainer } from "../../../styles/Containers";
import { StyledH2 } from "../../../styles/StyledH2";
import { Link } from "react-router-dom";

export const RecipesGroup = ({
  title,
  array,
  onClick,
  marginBottom,
  addButton,
  sliceBy,
}) => {
  return (
    <Container>
      <StyledH2>{title}</StyledH2>
      <Row
        xs={1}
        sm={1}
        lg={2}
        xl={3}
        className="g-4"
        style={{ paddingBottom: 20 }}
      >
        {array.slice(0, sliceBy).map((recipe, idx) => (
          <StyledCol key={idx}>
            <Link
              to={`/recipes/${recipe.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <StyledDetailsWrapper>
                <h5>{recipe.name}</h5>
                <p style={{ marginBottom: 0 }}>{recipe.preparationTime}</p>
                <p style={{ marginBottom: 0 }}>
                  Polubienia: <strong>{recipe.likes}</strong>
                </p>
                <div>
                  <img
                    style={{ width: 40, height: 40, borderRadius: "50%" }}
                    src={recipe.addedBy.photo}
                    alt="creator_photo"
                  />
                  <span> {recipe.addedBy.user}</span>
                </div>
                <div
                  style={{
                    position: "absolute",
                    right: "-60px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <img
                    style={{ width: 120, height: 120, borderRadius: "50%" }}
                    src={recipe.image}
                    alt="recipe_image"
                  />
                </div>
              </StyledDetailsWrapper>
            </Link>
          </StyledCol>
        ))}
      </Row>
      {addButton ? (
        <FlexContainer justify="center">
          <Button
            style={{ marginBottom: marginBottom }}
            onClick={onClick}
            variant="dark"
          >
            Zobacz więcej
          </Button>
        </FlexContainer>
      ) : null}
    </Container>
  );
};
