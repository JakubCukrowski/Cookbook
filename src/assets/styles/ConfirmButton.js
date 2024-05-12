import { Button } from "@mui/material";
import styled from "styled-components";

export const ConfirmButton = styled(Button)`
    && {
        border: 1px solid #e19f25;
        background-color: #e19f25;
        margin: 20px 0;
        display: block;

        &:hover {
            border: 1px solid white;
            background-color: #e19f25;
        }
    }
`