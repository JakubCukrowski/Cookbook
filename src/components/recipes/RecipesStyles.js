import styled from "styled-components";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const StyledCol = styled(Col)`
    transition: 0.3s;
    margin-left: auto;
    margin-right: auto;
    height: 520px;

    @media (min-width: 576px) {
      height: 480px;
    }

    img {
      height: 280px;
      object-fit: fill;

      @media (min-width: 576px) {
        height: 220px;
      }
    }
`

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
  width: 40%;
  margin: 20px auto;

  @media (min-width: 992px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
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

    &:disabled {
        color: red !important; 
    }
`

export const AuthorData = styled.div`
  
  img {
    width: 40px;
    height: 40px; 
    border-radius: 50%;
  }
`

export const PrepTimeInfo = styled.div`
  span {
    margin-left: 6px;
  }
`

