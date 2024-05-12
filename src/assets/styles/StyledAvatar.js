import { Avatar } from "@mui/material";
import styled from "styled-components";

export const StyledAvatar = styled(Avatar)`
    && {
        width: 50px;
        height: 50px;
        transition: 0.2s;

        &:hover {
            opacity: 0.8;
        }
    }
`