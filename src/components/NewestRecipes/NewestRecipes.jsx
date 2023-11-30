import React from "react";
import {Container } from "react-bootstrap";
import { NewestRecipeCard } from "./NewestRecipeCard";
import { StyledCardGroupContainer } from "../../styles/Containers";
import image from '../../images/heroImage.jpg'

export const NewestRecipes = () => {
    
    return (
        <Container fluid>
            <h2 style={{textAlign: "center", padding: 60}}>Najnowsze przepisy</h2>
            <StyledCardGroupContainer>
                <NewestRecipeCard cardTitle="Jakiś przepis" cardText="Opis przepisu" cardImage={image}/>
                <NewestRecipeCard cardTitle="Jakiś przepis" cardText="Opis przepisu" cardImage={image}/>
                <NewestRecipeCard cardTitle="Jakiś przepis" cardText="Opis przepisu" cardImage={image}/>
                <NewestRecipeCard cardTitle="Jakiś przepis" cardText="Opis przepisu" cardImage={image}/>
            </StyledCardGroupContainer>
        </Container>
    )
}