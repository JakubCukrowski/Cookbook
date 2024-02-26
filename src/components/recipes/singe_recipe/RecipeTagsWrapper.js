import styled from "styled-components";

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
