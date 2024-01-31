import styled from "styled-components";
import { CardImg } from "react-bootstrap";

export const StyledCardImg = styled(CardImg)`
    height: 220px;
    object-fit: cover;

    @media (min-width: 992px) {
        height: 250px;
    }

    
`