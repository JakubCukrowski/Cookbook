import React from "react";
import { StyledH2 } from "../../../assets/styles/StyledH2";
import { RecipesGroup } from "../../RecipesGroup";
import { Typography } from "@mui/material";
import { UserAuth } from "../../../context/AuthContext";
import { Link } from "react-router-dom";

const MainPageRecipesContent = ({
  sectionId,
  array,
  title,
  handleClick,
  addButton,
}) => {
  const { user } = UserAuth();
  return (
    <section id={sectionId}>
      <StyledH2>{title}</StyledH2>
      {array.length > 0 ? (
        <RecipesGroup
          title={title}
          array={array}
          onClick={handleClick}
          addButton={addButton}
          sliceBy={4}
        />
      ) : null}
      {array.length === 0 && user && (
        <Typography variant="h6" textAlign="center">
          Obecnie brak przepisów w tej kategorii <br /> Przejdź do{" "}
          <Link to="/dashboard">panelu użytkownika</Link> i dodaj przepis
        </Typography>
      )}
      {array.length === 0 && !user && (
        <Typography variant="h6" textAlign="center">
          Obecnie brak przepisów w tej kategorii <br />{" "}
          <Link to="/signin">Zaloguj się</Link> i dodaj przepis
        </Typography>
      )}
    </section>
  );
};

export default MainPageRecipesContent;
