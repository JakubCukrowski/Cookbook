import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { StyledH2 } from "../../../styles/StyledH2";
import { useParams } from "react-router-dom";
import { UserAuth } from "../../../context/AuthContext";
import { RecipesGroup } from "../main_page_recipes/RecipesGroup";

export const PopularTags = () => {
    const tagName = useParams()
    const {recipes} = UserAuth()
    const [filtered, setFiltered] = useState([])

    useEffect(() => {
        const filterRecipes = [...recipes].filter(recipe => recipe.tags.includes(tagName.tagName)).sort((a, b) => b.likedBy.length - a.likedBy.length)
        setFiltered(filterRecipes)
    }, [recipes])

    return (
        <Container>
            <StyledH2>Użytkownikom chwalą sobie przepisy z tej kategorii</StyledH2>

            <RecipesGroup array={filtered}/>
        </Container>
    )
}