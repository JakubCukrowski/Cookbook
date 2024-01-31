import styled from "styled-components";
import { Card } from "react-bootstrap";

export const StyledCard = styled(Card)`
    position: relative;
    overflow: hidden;
    transition: 0.3s;

    &:hover {
        box-shadow: 0 0 6px rgb(33, 37, 41);
    }

    @media (min-width: 768px) {
        height: 100%;
    }
`