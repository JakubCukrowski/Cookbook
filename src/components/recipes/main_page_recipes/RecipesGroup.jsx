import React from "react";
import {
  Button,
  CardBody,
  Container,
  Placeholder,
  Spinner,
} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { StyledCol } from "./StyledCol";
import { StyledCard } from "./StyledCard";
import { StyledCardImg } from "./StyledCardImg";
import { FakeSpinnerContainer, FlexContainer } from "../../../styles/Containers";
import { StyledLink } from "../../../styles/StyledLink";
import { LikeButton } from "../../LikeButton";
import { UserAuth } from "../../../context/AuthContext";
import { StyledH2 } from "../../../styles/StyledH2";
import { StyledCardWrapper } from "./StyledCardWrapper";

export const RecipesGroup = ({
  title,
  array,
  onClick,
  marginBottom,
  addButton,
}) => {
  const { isLoading } = UserAuth();

  return (
    <Container>
      <StyledH2>{title}</StyledH2>
      <Row xs={1} md={2} className="g-4" style={{ paddingBottom: 20 }}>
        {array.slice(0, 4).map((recipe, idx) => (
          <StyledCol key={recipe.id || idx}>
            {isLoading ? (
              <>
                <StyledCard>
                  <FakeSpinnerContainer>
                    <Spinner />
                  </FakeSpinnerContainer>
                  <CardBody>
                    <Placeholder as={Card.Title} animation="glow">
                      <Placeholder xs={9} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                      <Placeholder xs={6} />
                    </Placeholder>
                  </CardBody>
                </StyledCard>
              </>
            ) : (
              <>
                <StyledCardWrapper>
                  <StyledLink to={`/recipes/${recipe.id}`}>
                    <StyledCard>
                      <StyledCardImg variant="top" src={recipe.image} />
                      <Card.Body>
                        <Card.Title>{recipe.name}</Card.Title>
                        <Card.Text>
                          {`Liczba polubień: ${recipe.likes}`}
                        </Card.Text>
                      </Card.Body>
                    </StyledCard>
                  </StyledLink>
                </StyledCardWrapper>
              </>
            )}
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
