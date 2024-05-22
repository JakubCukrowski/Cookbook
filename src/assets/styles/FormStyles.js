import { Form } from "formik";
import styled from "styled-components";

export const StyledInputLabel = styled.label`
    && {
        color: white;
        background-color: #e19f25;
        text-align: center;
        cursor: pointer;
        padding: 10px;
        border-radius: 4px;
        transition: 0.2s;

        &:hover {
            opacity: 0.9;
        }
    }
`;

export const StyledRecipeForm = styled(Form)`
    margin-top: 50px;
    background-color: rgba(33, 37, 41, 0.1);
    padding: 40px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
    text-align: center;

`

export const StyledTextarea = styled.textarea`
    height: 140px;
    resize: none;
    border-radius: 6px;
    padding: 8px;
    background-color: transparent;
    border-color: rgba(0, 0, 0, 0.3);

    &:focus-visible {
        outline: 1px solid #0d6efd;
    }

    &:hover {
        border-color: rgba(0, 0, 0, 0.8);
    }
`