import React from "react";
import { UserAuth } from "../context/AuthContext";
import { RecipesGroup } from "./RecipesGroup";
import { useNavigate } from "react-router-dom";

export const NewestRecipes = () => {
    const {recipes} = UserAuth()
    const checkDate = (date) => new Date(date)
    const navigate = useNavigate()

    const sorted = [...recipes].sort((a, b) => checkDate(b.createdAt) - checkDate(a.createdAt))
       
    const handleClick = () => {
        navigate('/newest-recipes')
    }

    return (
        <RecipesGroup title="Najnowsze przepisy" array={sorted} onClick={handleClick}/>
    )
}