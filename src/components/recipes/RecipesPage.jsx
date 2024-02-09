import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Fuse from "fuse.js";
import { RecipesGroup } from "./main_page_recipes/RecipesGroup";
import { Spinner } from "react-bootstrap";
import { SpinnerContainer } from "../../styles/Containers";

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
      keys: ["name"],
      threshold: 0.4,
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
        <section>
          <RecipesGroup
            title={queryText.length > 0 ? `Przepisy zawierające: ${query}` : 'Brak wyników'}
            array={queryResults}
          />
        </section>
      ) : (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
      <section></section>
    </>
  );
};
