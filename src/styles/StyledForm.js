import { Form } from "react-bootstrap";
import styled from "styled-components";

export const StyledForm = styled(Form)`
    border: 1px solid white;
    padding: 30px;
    border-radius: 10px;
    width: 100%;

    @media (min-width: 992px) {
        width: 50%;
    }
`