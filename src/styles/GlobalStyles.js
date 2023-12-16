import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    .no-radius-left-bottom {
        border-bottom-left-radius: 0 !important;
    }

    .no-radius-right-bottom {
        border-bottom-right-radius: 0 !important;
    }
`