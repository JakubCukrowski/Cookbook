import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { BackToTopButton } from "./BackToTopButton";

export const BackToTop = () => {
    const scrollToTop = () => {
        return window.scrollTo(0, 0)
    }

    return (
        <>
            <BackToTopButton onClick={scrollToTop}>
                <FontAwesomeIcon icon={faArrowUp}/>
            </BackToTopButton>
        </>
    )
}