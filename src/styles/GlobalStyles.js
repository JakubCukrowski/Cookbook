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

    .add_pointer {
        cursor: pointer;
    }

    .recipe_image_input {
        display: none;
        align-self: flex-end;
    }

    .form_group_sfg {
        background-color: white;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
        cursor: pointer;
        border-radius: 8px;
        box-shadow: 0 0 4px rgb(0, 0, 0);
    }

    .form_group_error {
        box-shadow: 0 0 4px rgb(220, 53, 69);
    }

    .modal_styles {
        display: block;
        position: fixed;
        top: 10%;
    }

    .position_fixed {
        @media (min-width: 450px) {
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    }

    .tooltip-inner {
        background-color: tomato;
        font-size: 20px;
        padding: 4px 10px;
    }

    .tooltip-arrow {
        
        &::before {
            border-top-color: tomato !important;
        }
    }

    .search-bar-error {
        border: 2px solid tomato;
        border-radius: 12px;
    }
`;
