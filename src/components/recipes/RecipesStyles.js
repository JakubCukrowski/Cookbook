import styled from "styled-components";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const StyledCol = styled(Col)`
    transition: 0.3s;

    &:hover {
        transform: scale(0.95);
        opacity: 0.7;
    }
`

export const StyledDetailsWrapper = styled.div`
  box-shadow: 0 0 4px rgb(0, 0, 0);
  border-radius: 8px;
  width: 100%;
  min-height: 200px;
  padding: 20px 160px 20px 10px;
  position: relative;
  background-color: white;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  word-wrap: break-word;
`;

export const AuthorImageWrapper = styled.div`
    border-radius: 50%;
    position: relative;
    &::after {
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 50%;
        position: absolute;
        background-color: rgba(255, 255, 255, 0.5);
    }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;

export const RecipeAuthor = styled.p`
  font-weight: 700;
  font-size: 30px;
  align-self: flex-end;
  margin-bottom: 0;
  position: absolute;
  left: 50px;
`;

export const RecipeAuthorWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const RecipeDescription = styled.p`
    font-size: 22px;
    text-align: center;
`

export const RecipeTagLink = styled(Link)`
  text-decoration: none;
  background-color: rgb(33, 37, 41);
  color: white;
  padding: 4px;
  border-radius: 4px;
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
    transform: scale(0.95);
  }
`;

export const RecipeTagsWrapper = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  @media (min-width: 992px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 50px;
`;

export const ButtonWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: ${props => props.justify};
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
`;

export const StyledLikeButton = styled.button`
    border: none;
    background-color: transparent;
    z-index: 100;
    color: rgb(33, 37, 41);
    font-size: 50px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 0;
    transition: 50ms;

    &.liked {
        color: tomato;
    }

    &:focus {
        border: none;
    }

    @media (min-width: 992px) {
        right: ${props => props.rightTablet};
    }

    @media (min-width: 1200px) {
        right: ${props => props.rightDesktop};
    }

    @media (min-width: 1400px) {
        right: ${props => props.rightXl};
    }

    &:disabled {
        color: red !important; 
    }
`