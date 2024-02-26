import { Link } from "react-router-dom";
import styled from "styled-components";

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
