import { useState } from "react";
import { CustomPaginationItem } from "../assets/styles/CustomPaginationItem";
import { RecipesGroup } from "./RecipesGroup";
import { UserAuth } from "../context/AuthContext";
import { Pagination } from "react-bootstrap";

export const FilterBootstrapPagination = ({ array }) => {
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(12);
  const { recipes } = UserAuth();

  //bootstrap pagination
  const lastRecipeIndex = currentPage * recipesPerPage;
  const firstRecipeIndex = lastRecipeIndex - recipesPerPage;
  const slicedRecipes = array.slice(firstRecipeIndex, lastRecipeIndex);

  let items = [];
  for (
    let number = 1;
    number <= Math.ceil(recipes.length / recipesPerPage);
    number++
  ) {
    items.push(
      <CustomPaginationItem
        key={number}
        active={number === currentPage}
        onClick={() => setCurrentPage(number)}
      >
        {number}
      </CustomPaginationItem>
    );
  }

  return (
    <>
      <RecipesGroup array={slicedRecipes} />
      <div style={{width: '100%', display: "flex", justifyContent: "center"}}>
        {array.length > 12 ? <Pagination>{items}</Pagination> : null}
      </div>
    </>
  );
};
