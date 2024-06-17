import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    body {
        font-family: 'Noto Sans', sans-serif;
    }

    #root {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .no-radius-left-bottom {
        border-bottom-left-radius: 0 !important;
    }

    .no-radius-right-bottom {
        border-bottom-right-radius: 0 !important;
    }

    .error {
        border-color: tomato !important;
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

    .text-error {
        color: red;
    }

    .lax_m {
        margin-bottom: 20px;
    }

    .nav-link {
        color: white;
    }

    .no-scroll {
        overflow: hidden;
    }

.ribbon {
  font-size: 28px;
  font-weight: bold;
  color: #fff;
}
.ribbon {
  --f: .5em; /* control the folded part */
  
  position: absolute;
  top: 0;
  right: 0;
  line-height: 1.8;
  padding-inline: 1lh;
  padding-bottom: var(--f);
  border-image: conic-gradient(#0008 0 0) 51%/var(--f);
  clip-path: polygon(
    100% calc(100% - var(--f)),100% 100%,calc(100% - var(--f)) calc(100% - var(--f)),var(--f) calc(100% - var(--f)), 0 100%,0 calc(100% - var(--f)),999px calc(100% - var(--f) - 999px),calc(100% - 999px) calc(100% - var(--f) - 999px));
  transform: translate(calc((1 - cos(45deg))*100%), -100%) rotate(45deg);
  transform-origin: 0% 100%;
  background-color: #e19f25; /* the main color  */
}
`;
