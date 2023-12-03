import styled from "styled-components";
import { Container, CardGroup } from "react-bootstrap";

export const FlexContainer = styled(Container)`
    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
    
`

export const HeroFlexContainer = styled(FlexContainer)`
    position: relative;
    z-index: 100;
    padding-top: 2rem;
    text-align: center;

    h2 {
        color: white;
    }
`

export const StyledCardGroupContainer = styled(CardGroup)`

    @media (min-width: 576px) {
        width: 100%;
        display: flex;
        gap: 20px;
        align-items: center;
    }
`
export const PopularButtonsContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
`