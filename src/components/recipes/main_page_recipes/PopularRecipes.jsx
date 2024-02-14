import React from "react";
import { UserAuth } from "../../../context/AuthContext";
import { RecipesGroup } from "./RecipesGroup";
import { useNavigate } from "react-router-dom";

export const PopularRecipes = () => {
    const {recipes} = UserAuth()
    const popular = [...recipes].sort((a, b) => b.likes - a.likes)
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/category/popular-recipes')
    }
    
    return (
        <RecipesGroup title="Najpopularniejsze przepisy" array={popular} onClick={handleClick} addButton={true} sliceBy={6}/>
    )
}