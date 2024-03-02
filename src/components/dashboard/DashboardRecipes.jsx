import React, { useEffect, useState } from "react";
import { StyledLink } from "../../styles/StyledLink";
import { Button, Container } from "react-bootstrap";
import { DashboardRecipeImage, EditUserRecipeWrapper } from "./DashboardStyles";
import { UserAuth } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEdit,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
  writeBatch,
  deleteDoc,
  doc
} from "firebase/firestore";
import { db } from "../../firebase";
import { BootstrapModal } from "../BootstrapModal";

export const DashboardRecipes = ({
  linkTo,
  recipeName,
  recipeImage,
  isUserRecipe,
}) => {
  const { user } = UserAuth();
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0)
  const [showModal, setShowModal] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false)

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

  const handleDeleteRecipe = async () => {
    await deleteDoc(doc(db, 'recipes', linkTo))
    const q = query(
      collection(db, "users"),
      where("liked", "array-contains", linkTo)
    );

    const batch = writeBatch(db)

    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(doc => {
      const userRef = doc.ref
      const filterLikedRecipes = doc.data().liked.filter(recipe => recipe !== linkTo)
      batch.update(userRef, {'liked': filterLikedRecipes})
    })

    try {
      await batch.commit();
      setShowModal(false)
      setIsDeleted(true)

      const timeout = setTimeout(() => {
        setIsDeleted(false)
      }, 2000);

      return () => clearTimeout(timeout)
    } catch (e) {
      console.error("Error updating documents: ", e);
    }
  };

  useEffect(() => {
    if (isDeleted) {
      const interval = setInterval(() => {
        setProgress((prev) => prev + 5);
        console.log('ddddd');
      }, 50);
    
      return () => clearInterval(interval);
    }
  }, [isDeleted])

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
      {isDeleted ? <BootstrapModal title={'Usunięto pomyślnie'} progress={progress}/> : null}
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
                  <div className="util_buttons">
                    <Button
                      variant="dark"
                      onClick={() => navigate(`/recipes/edit/${linkTo}`)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </Button>
                    <Button
                      variant="dark"
                      onClick={() => navigate(`/recipes/${linkTo}`)}
                    >
                      <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
                    <Button variant="danger" onClick={handleDeleteButton}>
                      <FontAwesomeIcon icon={faTrashCan} />
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
