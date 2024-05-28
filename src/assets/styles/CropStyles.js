import styled from "styled-components";

export const StyledCrop = styled.div`
    background-color: rgba(0, 0, 0, 0.9);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
`

export const CropWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 300px;
    width: 100%;

    @media (min-width: 992px) {
        height: 50vh;
    }
`