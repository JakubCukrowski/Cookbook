import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ClearIcon from "@mui/icons-material/Clear";
import PersonIcon from "@mui/icons-material/Person";
import { Typography, Box, SpeedDial, SpeedDialAction } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  CustomizedRecipesContainer,
  CustomizedRecipesWrapper,
} from "../../assets/styles/DashboardStyles";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import CustomizedModal from "./CustomModal";
import { deleteObject, listAll, ref } from "firebase/storage";

const DashboardRecipesStructure = ({
  title,
  array,
  emptyMessage,
  addedRecipes,
}) => {
  const navigate = useNavigate();
  const [recipeToDelete, setRecipeToDelete] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigateToRecipe = (recipeId) => {
    navigate(`/recipes/${recipeId}`);
  };

  const editRecipe = (recipeId) => {
    navigate(`/recipes/edit/${recipeId}`);
  };

  const handleOpenModal = async (recipeId) => {
    const recipeRef = doc(db, "recipes", recipeId);
    const recipeDoc = await getDoc(recipeRef);
    setRecipeToDelete({ ...recipeDoc.data(), id: recipeDoc.id });
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setRecipeToDelete(null);
    setIsModalOpen(false);
  };

  const handleDeleteRecipe = async () => {
    await deleteDoc(doc(db, "recipes", recipeToDelete.id));
    const recipeStorageRef = ref(storage, `/recipe/${recipeToDelete.id}`);
    await listAll(recipeStorageRef).then((res) => deleteObject(res.items[0]));
    setRecipeToDelete(null);
    setIsModalOpen(false);
  };

  const userRecipesActions = [
    {
      icon: <ArrowForwardIcon />,
      name: "Idź do przepisu",
      onClick: navigateToRecipe,
    },
    { icon: <EditIcon />, name: "Edytuj przepis", onClick: editRecipe },
    { icon: <DeleteIcon />, name: "Usuń przepis", onClick: handleOpenModal },
  ];

  const userLikedRecipesActions = [
    {
      icon: <ArrowForwardIcon />,
      name: "Idź do przepisu",
      onClick: navigateToRecipe,
    },
    { icon: <ClearIcon />, name: "Nie lubię" },
    { icon: <PersonIcon />, name: "Profil twórcy" },
  ];

  return (
    <>
      <CustomizedModal
        modalOpen={isModalOpen}
        handleCloseModal={handleCancel}
        recipeName={recipeToDelete ? recipeToDelete.name : ""}
        handleCancel={handleCancel}
        handleDelete={handleDeleteRecipe}
      />
      <CustomizedRecipesWrapper>
        <Typography sx={{ textAlign: "center" }} variant="h5">
          {title}
        </Typography>
        <CustomizedRecipesContainer>
          {array.length > 0 ? (
            array.map((recipe, index) => (
              <Box
                key={index}
                sx={{ position: "relative", marginBottom: "20px" }}
              >
                <SpeedDial
                  direction="right"
                  sx={{ position: "absolute", bottom: "10px", left: "10px" }}
                  ariaLabel="user recipe utils"
                  icon={<KeyboardArrowRightIcon />}
                >
                  {addedRecipes
                    ? userRecipesActions.map((action) => (
                        <SpeedDialAction
                          key={action.name}
                          icon={action.icon}
                          tooltipTitle={action.name}
                          onClick={() => action.onClick(recipe.id)}
                        />
                      ))
                    : userLikedRecipesActions.map((action) => (
                        <SpeedDialAction
                          key={action.name}
                          icon={action.icon}
                          tooltipTitle={action.name}
                          onClick={() => action.onClick(recipe.id)}
                        />
                      ))}
                </SpeedDial>
                <Typography variant="h6">{recipe.name}</Typography>
                <img
                  style={{ width: "100%" }}
                  src={recipe.image}
                  alt="recipe_image"
                />
              </Box>
            ))
          ) : (
            <Typography>{emptyMessage}</Typography>
          )}
        </CustomizedRecipesContainer>
      </CustomizedRecipesWrapper>
    </>
  );
};

export default DashboardRecipesStructure;
