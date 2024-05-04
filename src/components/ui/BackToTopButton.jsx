import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { StyledBackToTopButton } from "../../assets/styles/StyledBackToTopButton";

export const BackToTopButton = () => {
    const scrollToTop = () => {
        return window.scrollTo(0, 0)
    }

    return (
        <>
            <StyledBackToTopButton onClick={scrollToTop}>
                <FontAwesomeIcon icon={faArrowUp}/>
            </StyledBackToTopButton>
        </>
    )
}