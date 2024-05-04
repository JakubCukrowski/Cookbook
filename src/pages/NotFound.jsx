import React from "react";
import { StyledNotFoundSection } from "../assets/styles/StyledNotFoundSection";
import { Container, Image } from "react-bootstrap";
import { StyledLink } from "../assets/styles/StyledLink";

export const NotFound = () => {
  return (
    <StyledNotFoundSection>
      <Container>
        <Image
            style={{width: '100%'}}
          rounded
          src="https://prestashop.com/sites/default/files/wysiwyg/404_not_found.png"
          alt="error404"
        />
        <StyledLink to="/" fontsize="24px">
          Take me home!
        </StyledLink>
      </Container>
    </StyledNotFoundSection>
  );
};
