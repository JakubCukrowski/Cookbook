import React from "react";
import { Button, Card } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { AuthorName, StyledCol } from "../RecipesStyles";
import { CustomContainer, FlexContainer } from "../../../styles/Containers";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { AuthorData } from "../RecipesStyles";
import { PrepTimeInfo } from "../RecipesStyles";
import { OrangeButton } from "../../../styles/OrangeButton";
import { StyledLink } from "../../../styles/StyledLink";

export const RecipesGroup = ({
  array,
  onClick,
  marginBottom,
  addButton,
  sliceBy,
}) => {
  return (
    <CustomContainer>
      <Row
        xs={1}
        sm={2}
        md={2}
        lg={3}
        xl={4}
        className="g-4"
        style={{ paddingBottom: 20 }}
      >
        {array.slice(0, sliceBy).map((recipe, idx) => (
          <StyledCol key={idx}>
            <Card
              style={{ height: "100%", backgroundColor: "rgba(0, 0, 0, 0.05)" }}
            >
              <Card.Img src={recipe.image} />
              <Card.Body style={{ position: "relative" }}>
                <Card.Title>{recipe.name}</Card.Title>
                <div style={{ position: "absolute", bottom: 20 }}>
                  <StyledLink
                    color="black"
                    to={`${recipe.addedBy.user}`
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .toLowerCase()}
                  >
                    <AuthorData>
                      <img src={recipe.addedBy.photo} alt="creator_photo" />
                      <AuthorName>{recipe.addedBy.user}</AuthorName>
                    </AuthorData>
                  </StyledLink>
                  <PrepTimeInfo>
                    <FontAwesomeIcon icon={faClock} />
                    <span>{recipe.preparationTime}</span>
                  </PrepTimeInfo>
                  <Card.Text>
                    Polubienia: <strong>{recipe.likedBy.length}</strong>
                  </Card.Text>
                  <Link to={`/recipes/${recipe.id}`}>
                    <OrangeButton>Przejdź do przepisu</OrangeButton>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </StyledCol>
        ))}
      </Row>
      {addButton ? (
        <FlexContainer justify="center">
          <OrangeButton
            style={{ marginBottom: marginBottom }}
            onClick={onClick}
            variant="dark"
          >
            Zobacz więcej
          </OrangeButton>
        </FlexContainer>
      ) : null}
    </CustomContainer>
  );
};
