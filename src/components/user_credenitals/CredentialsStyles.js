import { Form } from "react-bootstrap";
import styled from "styled-components";

export const StyledSignSection = styled.section`
    color: white;
    background-color: rgb(33, 37, 41);
    max-width: 100%; 
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const StyledForm = styled(Form)`
    border: 1px solid white;
    padding: 30px;
    border-radius: 10px;
    width: 100%;
    margin-bottom: 50px;

    @media (min-width: 992px) {
        width: 50%;
    }
`