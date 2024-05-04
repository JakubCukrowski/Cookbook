import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: ${props => props.justify};
  position: relative;
  width: 100%;
  flex-direction: ${props => props.direction};
`;
