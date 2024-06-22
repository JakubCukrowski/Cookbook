import styled from "styled-components";
import { Divider } from "@mui/material";

export const CustomDivider = styled(Divider)`
  && {
    @media (max-width: 600px) {
      text-wrap: wrap;
    }
  }
`;
