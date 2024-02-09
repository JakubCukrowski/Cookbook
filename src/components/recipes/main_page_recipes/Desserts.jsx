import React, { useEffect, useState } from "react";
import { UserAuth } from "../../../context/AuthContext";
import { RecipesGroup } from "./RecipesGroup";
import { useNavigate } from "react-router-dom";

export const Desserts = () => {
    const {recipes, isRecipeAdded} = UserAuth()
    const checkDate = (date) => new Date(date)
    const navigate = useNavigate()
    const [sortedRecipes, setSortedRecipes] = useState([])

    
    useEffect(() => {
        const desserts = [...recipes].filter(recipie => recipie.category === "Desery")
        const sortedDesserts = desserts.sort((a, b) => checkDate(b.createdAt) - checkDate(a.createdAt))
        setSortedRecipes(sortedDesserts)
    }, [recipes, isRecipeAdded])
       
    const handleClick = () => {
        navigate('/newest-recipes')
    }

    return (
        <RecipesGroup title="Desery" array={sortedRecipes} onClick={handleClick} addButton={true}/>
    )
}