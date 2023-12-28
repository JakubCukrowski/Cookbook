import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { StyledLikeButton } from "../styles/CardStyles/StyledLikeButton";

export const LikeButton = ({top, right, rightTablet, rightDesktop, rightXl, onClick, id, className, disabled}) => {

    return (
        <>
            <StyledLikeButton
                className={className}
                disabled={disabled}
                id={id}
                onClick={onClick} 
                top={top} 
                right={right} 
                rightTablet={rightTablet} 
                rightDesktop={rightDesktop} 
                rightXl={rightXl}>
                <FontAwesomeIcon icon={faHeart}/>
            </StyledLikeButton>
        </>
    )
}