import styled from "styled-components";
import { Image } from "react-bootstrap";

export const StyledImage = styled(Image)`
    object-fit: cover;
    width: 100%;
    max-height: 60vh;

    @media (min-width: 992px) {
       width: 70%;
    }

`