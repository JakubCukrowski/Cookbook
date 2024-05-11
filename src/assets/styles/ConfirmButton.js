import { Button } from "@mui/material";
import styled from "styled-components";

export const ConfirmButton = styled(Button)`
    && {
        border: 1px solid #e19f25;
        background-color: #e19f25;

        &:hover {
            border: 1px solid rgb(33, 37, 41);
            background-color: #e19f25;
        }
    }
`