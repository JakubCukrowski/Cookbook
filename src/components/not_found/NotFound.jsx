import React from "react";
import { StyledNotFoundSection } from "./StyledNotFoundSection";
import { Image } from "react-bootstrap";
import { StyledLink } from "../../styles/StyledLink";

export const NotFound = () => {

    return (
        <StyledNotFoundSection>
            <Image rounded src='https://prestashop.com/sites/default/files/wysiwyg/404_not_found.png' alt="error404" />
            <StyledLink to="/" fontsize="24px">Take me home!</StyledLink>
        </StyledNotFoundSection>
    )
}