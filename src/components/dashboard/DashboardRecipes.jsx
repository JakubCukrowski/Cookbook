import React, { useEffect, useState } from "react";
import { StyledLink } from "../../assets/styles/StyledLink";
import { Container } from "react-bootstrap";
import {
  DashboardRecipeImage,
  EditUserRecipeWrapper,
} from "../../assets/styles/DashboardStyles";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
  writeBatch,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { BootstrapModal } from "../../components/BootstrapModal";
import EditIcon from "@mui/icons-material/Edit";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { DeleteRecipeButton, OrangeButton } from "../../assets/styles/Buttons";

export const DashboardRecipes = ({
  linkTo,
  recipeName,
  recipeImage,
  isUserRecipe,
}) => {
  const { user } = UserAuth();
  //hover status of user added recipe to show utility buttons
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  //show modal with confirmation/cancelation of deleting the recipe
  const [showModal, setShowModal] = useState(false);
  //renders a modal with progress bar
  const [isDeleted, setIsDeleted] = useState(false);

  const handleHoverOver = () => {
    setIsHovered(true);
  };

  const handleHoverOut = () => {
    setIsHovered(false);
  };

  const handleDeleteButton = (e) => {
    e.preventDefault();
    setShowModal((prev) => !prev);
  };

  //on actual delete confirmation
  const handleDeleteRecipe = async () => {
    await deleteDoc(doc(db, "recipes", linkTo));
    await deleteDoc(doc(db, "comments", linkTo));
    const q = query(
      collection(db, "users"),
      where("liked", "array-contains", linkTo)
    );

    const batch = writeBatch(db);

    //gets all users who liked the recipe in the past, and filters it out
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const userRef = doc.ref;
      const filterLikedRecipes = doc
        .data()
        .liked.filter((recipe) => recipe !== linkTo);
      batch.update(userRef, { liked: filterLikedRecipes });
    });

    try {
      await batch.commit();
      setShowModal(false);
      setIsDeleted(true);

      const timeout = setTimeout(() => {
        setIsDeleted(false);
      }, 2000);

      return () => clearTimeout(timeout);
    } catch (e) {
      console.error("Error updating documents: ", e);
    }
  };

  useEffect(() => {
    if (isDeleted) {
      const interval = setInterval(() => {
        setProgress((prev) => prev + 5);
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isDeleted]);

  return (
    <>
      {showModal ? (
        <BootstrapModal
          withTitle={true}
          modalTitle={`Chesz usunąć ${recipeName}`}
          title="Na pewno?"
          onCancel={() => setShowModal((prev) => !prev)}
          onConfirm={handleDeleteRecipe}
        />
      ) : null}
      {isDeleted ? (
        <BootstrapModal title={"Usunięto pomyślnie"} progress={progress} />
      ) : null}
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
                {isHovered && (
                  <div className="util_buttons">
                    <OrangeButton
                      onClick={() => navigate(`/recipes/edit/${linkTo}`)}
                    >
                      <EditIcon />
                    </OrangeButton>
                    <OrangeButton
                      onClick={() => navigate(`/recipes/${linkTo}`)}
                    >
                      <ArrowForwardIosIcon />
                    </OrangeButton>
                    <DeleteRecipeButton
                      onClick={handleDeleteButton}
                    >
                      <DeleteForeverIcon />
                    </DeleteRecipeButton>
                  </div>
                )}
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
