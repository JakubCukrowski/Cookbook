import React from "react";
import {Container } from "react-bootstrap";
import { RecipeCard } from "./RecipeCard";
import { StyledCardGroupContainer } from "../styles/Containers";


export const NewestRecipes = ({recipes}) => {
    const checkDate = (date) => {
        return new Date(date)
    }
    
    const sorted = [...recipes].sort((a, b) => checkDate(b.createdAt) - checkDate(a.createdAt))
       
    return (
        <Container>
            <h2 style={{textAlign: "center", padding: 60}}>Najnowsze przepisy</h2>
            <StyledCardGroupContainer>
                {sorted.splice(0, 4).map((recipe, id) => {
                   return <RecipeCard key={id} cardTitle={recipe.name} cardText={`Ocena: ${recipe.likes}`} cardImage={recipe.image}/> 
                })}
                
            </StyledCardGroupContainer>
        </Container>
    )
}