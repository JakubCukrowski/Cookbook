import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Fuse from "fuse.js";
import { RecipesGroup } from "../components/RecipesGroup";
import { Spinner } from "react-bootstrap";
import { SpinnerContainer } from "../assets/styles/Containers";
import { NewestRecipes } from "../components/recipes/main_page_recipes/NewestRecipes";
import {PopularRecipes} from '../components/recipes/main_page_recipes/PopularRecipes'
import {Desserts} from '../components/recipes/main_page_recipes/Desserts'
import { StyledH2 } from "../assets/styles/StyledH2";

export const RecipesPage = () => {
  const {
    queryResults,
    updateQueryText,
    queryText,
    recipes,
    updateQueryResults,
  } = UserAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isDownloaded, setIsDownloaded] = useState(false);

  const query = searchParams.get("query");

  useEffect(() => {
    updateQueryText(query);

    const fuse = new Fuse(recipes, {
      keys: ["name", ["tags"]],
      threshold: 0.3,
      includeMatches: true,
    });

    //results are pushed to queryresults state
    const result = fuse.search(query).map((res) => res.item);

    updateQueryResults(result);
    const timeout = setTimeout(() => {
      return setIsDownloaded(true);
    }, 500);

    return () => clearTimeout(timeout)

  }, [queryText, recipes]);


  return (
    <>
      {isDownloaded ? (
        <section style={{minHeight: 'calc(100vh - 192.8px)'}}>
          <StyledH2>{queryText.length > 0 && queryResults.length > 0 ? `Przepisy zawierające: ${query}` : `Brak wyników dla: ${query}`}</StyledH2>
          <RecipesGroup
            array={queryResults}
          />
          {queryResults.length > 0 ? null : <><PopularRecipes /><NewestRecipes /><Desserts /></>}
        </section>
      ) : (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}

    </>
  );
};
