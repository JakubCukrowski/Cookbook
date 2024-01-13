import React from "react";
import { UserAuth } from "../context/AuthContext";
import { RecipesGroup } from "./RecipesGroup";

export const PopularRecipes = () => {
    const {recipes} = UserAuth()
    const popular = [...recipes].sort((a, b) => b.likes - a.likes)
    
    return (
        <RecipesGroup title="Najpopularniejsze przepisy" array={popular} marginBottom={80}/>
    )
}