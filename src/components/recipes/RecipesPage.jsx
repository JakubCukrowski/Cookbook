import React, { useEffect, useState } from "react";
import { StyledH2 } from "../../styles/StyledH2";
import { useParams, useSearchParams } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

export const RecipesPage = () => {
    const {queryResults} = UserAuth()
    const [searchParams, setSearchParams] = useSearchParams()

    const querry = searchParams.get('querry')

    console.log(queryResults);


    return (
        <section>
            {queryResults.map(recipe => <div><p>{recipe.name}</p></div>)}
        </section>
    )
}