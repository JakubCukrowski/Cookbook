import { useState } from "react";
import { CustomPaginationItem } from "../../styles/CustomPaginationItem";
import { DashboardRecipes } from "./DashboardRecipes";
import { Pagination } from "react-bootstrap";

export const DashboardBootstrapPagination = ({ recipes, isUserRecipe }) => {
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(2);

  //bootstrap pagination
  const lastRecipeIndex = currentPage * recipesPerPage;
  const firstRecipeIndex = lastRecipeIndex - recipesPerPage;
  const slicedRecipes = recipes.slice(firstRecipeIndex, lastRecipeIndex);

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
      {slicedRecipes.map((recipe, index) => (
        <DashboardRecipes
          key={index}
          linkTo={recipe.id}
          recipeName={recipe.name}
          recipeImage={recipe.image}
          isUserRecipe={isUserRecipe}
        />
      ))}

      {recipes.length > 2 ? <Pagination>{items}</Pagination> : null}
    </>
  );
};
