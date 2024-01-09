import React from "react";
import {Button, CardBody, Container, Placeholder, Spinner } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { StyledCol } from "../styles/CardStyles/StyledCol";
import { StyledCard } from "../styles/CardStyles/StyledCard";
import { StyledCardImg } from "../styles/CardStyles/StyledCardImg";
import { FakeSpinnerContainer, FlexContainer } from "../styles/Containers";
import { StyledLink } from "../styles/StyledLink";
import { LikeButton } from "./LikeButton";
import { UserAuth } from "../context/AuthContext";

export const RecipesGroup = ({title, array, onClick}) => {
    const {isLoading, checkIfExists} = UserAuth()

    return (
        <Container>
            <h2 style={{textAlign: "center", padding: 60}}>{title}</h2>
            <Row xs={1} md={2} className="g-4" style={{paddingBottom: 20}}>
                {array.slice(0, 4).map((recipe, idx) => (
                    <StyledCol key={recipe._id || idx}>
                        {isLoading
                        ? <>
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
                        :   <>
                                {/* StyledCardWrapper */}
                                <div style={{position: "relative", height: '100%'}}> 
                                    {checkIfExists(recipe._id) 
                                        ?   <LikeButton 
                                                disabled={checkIfExists(recipe._id)}
                                                top="0" 
                                                right="14px" /> 
                                        : ''}
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
                                </div>
                            </>}
                    </StyledCol>   
                ))}
            </Row>
            <FlexContainer justify="center">
                <Button onClick={onClick} variant="dark">Zobacz więcej</Button>
            </FlexContainer>
        </Container>
    )
}