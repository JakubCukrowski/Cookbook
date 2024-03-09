import React, { useEffect, useState } from "react";
import { UserAuth } from "../../../context/AuthContext";
import { RecipesGroup } from "./RecipesGroup";
import { useNavigate } from "react-router-dom";
import { StyledH2 } from "../../../styles/StyledH2";

export const NewestRecipes = () => {
    const {recipes, isRecipeAdded} = UserAuth()
    const checkDate = (date) => new Date(date)
    const navigate = useNavigate()
    const [sortedRecipes, setSortedRecipes] = useState([])

    
    useEffect(() => {
        const sorted = [...recipes].sort((a, b) => checkDate(b.createdAt) - checkDate(a.createdAt))
        setSortedRecipes(sorted)
    }, [recipes, isRecipeAdded])
       
    const handleClick = () => {
        navigate('/category/newest-recipes')
    }

    return (
        <>
        <StyledH2>Najnowsze przepisy</StyledH2>
        <RecipesGroup title="Najnowsze przepisy" array={sortedRecipes} onClick={handleClick} addButton={true} sliceBy={6}/>
        </>
    )
}