import styled from "styled-components";
import { Col, Form } from "react-bootstrap";
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
`;

export const RecipeAuthorWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  position: relative;
  text-decoration: none;
  color: black;

  &:hover {
    p {
      color: blue;
    }
  }
`;

export const RecipeDescription = styled.p`
    font-size: 22px;
    text-align: center;
`

export const RecipeTagLink = styled(Link)`
  text-decoration: none;
  background-color: #e19f25;
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

export const AuthorName = styled.span`
  margin-left: 6px;
`

export const PrepTimeInfo = styled.div`
  span {
    margin-left: 6px;
  }
`

export const FilterFormStyle = styled(Form)`
  margin-bottom: 60px;

  @media (min-width: 992px) {
    width: 40%;
    margin-left: auto;
    margin-right: auto;
  }
`
export const NoResults = styled.div`
  text-align: center;
`

export const StyledCommentsDiv = styled.div`
  @media (min-width: 992px) {
    width: 60%;
    margin: 0 auto;
  }
`