import styled from "styled-components";
import { Col } from "react-bootstrap";

export const StyledCol = styled(Col)`
    transition: 0.3s;

    &:hover {
        transform: scale(0.95);
        opacity: 0.7;
    }
`