import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Noto Sans', sans-serif;
    }

    .no-radius-left-bottom {
        border-bottom-left-radius: 0 !important;
    }

    .no-radius-right-bottom {
        border-bottom-right-radius: 0 !important;
    }

    .error {
        border-color: tomato;
        color: green;
        padding: 20px;
    }
`