import { Button } from "react-bootstrap";
import styled from "styled-components";

export const OrangeButton = styled(Button)`
    background-color: #e19f25;
    transition: 0.4s ease;
    border: none;

    &:hover {
        opacity: 0.8;
        background-color: #cd8500;
    }
`