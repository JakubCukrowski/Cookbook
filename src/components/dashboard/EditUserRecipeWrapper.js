import styled from "styled-components";

export const EditUserRecipeWrapper = styled.div`
    width: 300px;
    margin: 0 auto;
    position: relative;
    cursor: pointer;
    z-index: 1;

    &:hover > img {
        opacity: 0.5;
    }

    .util_buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 200;
    }
    
`