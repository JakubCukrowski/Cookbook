import React from "react";
import {Button, Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { StyledCol } from "../styles/CardStyles/StyledCol";
import { StyledCard } from "../styles/CardStyles/StyledCard";
import { StyledCardImg } from "../styles/CardStyles/StyledCardImg";
import { FlexContainer } from "../styles/Containers";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { StyledLink } from "../styles/StyledLink";


export const NewestRecipes = () => {
    const {recipes} = UserAuth()
    const checkDate = (date) => {
        return new Date(date)
    }
    
    const sorted = [...recipes].sort((a, b) => checkDate(b.createdAt) - checkDate(a.createdAt))
       
    return (
        <Container>
            <h2 style={{textAlign: "center", padding: 60}}>Najnowsze przepisy</h2>
            <Row xs={1} md={2} className="g-4" style={{paddingBottom: 20}}>
                {sorted.splice(0, 4).map((recipe, idx) => (
                    <StyledCol key={idx}>
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
                    </StyledCol>
                ))}
            </Row>
            <FlexContainer justify="center">
                <Button variant="dark">Zobacz więcej</Button>
            </FlexContainer>
        </Container>
    )
}