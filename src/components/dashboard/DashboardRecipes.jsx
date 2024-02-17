import React, { useState } from "react";
import { StyledLink } from "../../styles/StyledLink";
import { Button, Container } from "react-bootstrap";
import { DashboardRecipeImage } from "./DashboardRecipeImage";
import { UserAuth } from "../../context/AuthContext";
import { EditUserRecipeWrapper } from "./EditUserRecipeWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const DashboardRecipes = ({
  linkTo,
  recipeName,
  recipeImage,
  isUserRecipe,
}) => {
  const { user } = UserAuth();
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate()

  const handleHoverOver = () => {
    setIsHovered(true);
  };

  const handleHoverOut = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div style={{ paddingTop: 10, textAlign: "center", width: "100%" }}>
        <span>{recipeName}</span>
        {user && isUserRecipe ? (
          <>
            <Container>
              <EditUserRecipeWrapper
                onMouseEnter={handleHoverOver}
                onMouseLeave={handleHoverOut}
                onFocus={handleHoverOver}
              >
                {isHovered ? (
                  <div
                    onClick={() => console.log("dupa")}
                    className="util_buttons"
                  >
                    <Button variant="dark" onClick={() => navigate(`/recipes/edit/${linkTo}`)}>
                      <FontAwesomeIcon icon={faEdit} />
                    </Button>
                    <Button variant="dark" onClick={() => navigate(`/recipes/${linkTo}`)}>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
                  </div>
                ) : null}
                <DashboardRecipeImage src={recipeImage} alt="recipe" />
              </EditUserRecipeWrapper>
            </Container>
          </>
        ) : (
          <StyledLink to={`/recipes/${linkTo}`}>
            <Container>
              <DashboardRecipeImage src={recipeImage} alt="recipe" />
            </Container>
          </StyledLink>
        )}
      </div>
    </>
  );
};
