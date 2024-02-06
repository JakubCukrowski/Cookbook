import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { StyledLikeButton } from "./recipes/StyledLikeButton";

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