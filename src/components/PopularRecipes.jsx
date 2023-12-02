import React from "react";
import {Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { StyledCol } from "../styles/CardStyles/StyledCol";
import { StyledCard } from "../styles/CardStyles/StyledCard";
import { StyledCardImg } from "../styles/CardStyles/StyledCardImg";

export const PopularRecipes = ({recipes}) => {
    const popular = [...recipes].sort((a, b) => b.likes - a.likes)
    
    return (
        <Container style={{paddingBottom: 60}}>
            <h2 style={{textAlign: "center", padding: 60}}>Najpopularniejsze przepisy</h2>
            <Row xs={1} md={2} className="g-4">
                {popular.splice(0, 4).map((recipe, idx) => (
                    <StyledCol key={idx}>
                    <StyledCard>
                        <StyledCardImg variant="top" src={recipe.image} />
                        <Card.Body>
                        <Card.Title>{recipe.name}</Card.Title>
                        <Card.Text>
                            {`Polubienia: ${recipe.likes}`}
                        </Card.Text>
                        </Card.Body>
                    </StyledCard>
                    </StyledCol>
                ))}
                </Row>
        </Container>
    )
}