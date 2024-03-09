import React from "react";
import { Button, Container, Card } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { StyledCol } from "../RecipesStyles";
import { CustomContainer, FlexContainer } from "../../../styles/Containers";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { AuthorData } from "../RecipesStyles";
import { PrepTimeInfo } from "../RecipesStyles";

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
            <Card style={{ height: "100%" }}>
              <Card.Img
                src={recipe.image}
              />
              <Card.Body style={{position: "relative"}}>
                <Card.Title>{recipe.name}</Card.Title>
                <div style={{position: "absolute", bottom: 20}}>
                  <AuthorData>
                    <img src={recipe.addedBy.photo} alt="creator_photo" />
                    <span> {recipe.addedBy.user}</span>
                  </AuthorData>
                  <PrepTimeInfo>
                    <FontAwesomeIcon icon={faClock} />
                    <span>{recipe.preparationTime}</span>
                  </PrepTimeInfo>
                  <Card.Text>
                    Polubienia: <strong>{recipe.likes}</strong>
                  </Card.Text>
                  <Link to={`/recipes/${recipe.id}`}>
                    <Button variant="dark">Przejdź do przepisu</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
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
    </CustomContainer>
  );
};
