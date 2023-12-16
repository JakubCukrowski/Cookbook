import React from "react";
import {Button, Container, Spinner, Placeholder, CardBody } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { StyledCol } from "../styles/CardStyles/StyledCol";
import { StyledCard } from "../styles/CardStyles/StyledCard";
import { StyledCardImg } from "../styles/CardStyles/StyledCardImg";
import { FlexContainer, FakeSpinnerContainer } from "../styles/Containers";
import { UserAuth } from "../context/AuthContext";
import { StyledLink } from "../styles/StyledLink";

export const PopularRecipes = () => {
    const {recipes} = UserAuth()
    const popular = [...recipes].sort((a, b) => b.likes - a.likes)
    
    return (
        <Container style={{paddingBottom: 60}}>
            <h2 style={{textAlign: "center", padding: 60}}>Najpopularniejsze przepisy</h2>
            <Row xs={1} md={2} className="g-4" style={{paddingBottom: 20}}>
                {popular.splice(0, 4).map((recipe, idx) => (
                    <>
                        {recipes.length === 0
                        ? <StyledCol key={idx}>
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
                        </StyledCol>
                        : <StyledCol key={idx}>
                                <StyledLink to={`/recipes/${recipe._id}`}>
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
                            </StyledCol>}
                    </>
                ))}
            </Row>
            <FlexContainer justify="center">
                <Button variant="dark">Zobacz więcej</Button>
            </FlexContainer>
        </Container>
    )
}