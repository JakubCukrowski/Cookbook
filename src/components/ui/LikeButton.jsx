import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { StyledLikeButton } from "../../assets/styles/RecipesStyles";

export const LikeButton = ({onClick, id, className, disabled}) => {

    return (
        <>
            <StyledLikeButton
                className={className}
                disabled={disabled}
                id={id}
                onClick={onClick}>
                <FontAwesomeIcon icon={faHeart}/>
            </StyledLikeButton>
        </>
    )
}