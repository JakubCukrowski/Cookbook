import React, { useEffect, useState } from "react";
import { UserAuth } from "../../../context/AuthContext";
import { RecipesGroup } from "./RecipesGroup";
import { useNavigate } from "react-router-dom";

export const Soups = () => {
    const {recipes, isRecipeAdded} = UserAuth()
    const checkDate = (date) => new Date(date)
    const navigate = useNavigate()
    const [sortedRecipes, setSortedRecipes] = useState([])

    
    useEffect(() => {
        const soups = [...recipes].filter(recipe => recipe.category === 'Zupy')
        const sortedSoupsByAddDate = [...soups].sort((a, b) => checkDate(b.createdAt) - checkDate(a.createdAt))
        setSortedRecipes(sortedSoupsByAddDate)
    }, [recipes, isRecipeAdded])
       
    const handleClick = () => {
        navigate('/newest-recipes')
    }

    return (
        <RecipesGroup title="Zupy" array={sortedRecipes} onClick={handleClick} addButton={true}/>
    )
}