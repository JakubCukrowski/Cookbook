import { Button } from "@mui/material";
import styled from "styled-components";

export const ConfirmButton = styled(Button)`
    && {
        color: white;
        border: 1px solid rgba(255,255,255, 0.5);

        &:hover {
            border: 1px solid white;
        }

        &.MuiTouchRipple-root {
            color: white;
        }
    }
`