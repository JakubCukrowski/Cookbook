import styled from "styled-components";
import { Image } from "react-bootstrap";

export const StyledImage = styled(Image)`
    object-fit: cover;
    width: 100%;
    height: auto;

    @media (min-width:572px)  {
        height: 60vh;
    }

`