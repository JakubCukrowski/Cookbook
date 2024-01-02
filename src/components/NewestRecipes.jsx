import React from "react";
import { UserAuth } from "../context/AuthContext";
import { RecipesGroup } from "./RecipesGroup";

export const NewestRecipes = () => {
    const {recipes} = UserAuth()
    const checkDate = (date) => new Date(date)

    const sorted = [...recipes].sort((a, b) => checkDate(b.createdAt) - checkDate(a.createdAt))
       
    return (
        <RecipesGroup title="Najnowsze przepisy" array={sorted} />
    )
}