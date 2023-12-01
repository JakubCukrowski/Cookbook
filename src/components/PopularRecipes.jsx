import React from "react";
import {Container } from "react-bootstrap";
import { RecipeCard } from "./RecipeCard";
import { StyledCardGroupContainer } from "../styles/Containers";

export const PopularRecipes = ({recipes}) => {
    const popular = [...recipes].sort((a, b) => b.likes - a.likes)
    
    return (
        <Container style={{paddingBottom: 60}}>
            <h2 style={{textAlign: "center", padding: 60}}>Najpopularniejsze przepisy</h2>
            <StyledCardGroupContainer>
                {popular.splice(0, 4).map((recipe, id) => {
                   return <RecipeCard key={id} cardTitle={recipe.name} cardText={`Ocena: ${recipe.likes}`} cardImage={recipe.image}/> 
                })}
                
            </StyledCardGroupContainer>
        </Container>
    )
}