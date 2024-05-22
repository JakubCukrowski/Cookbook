import React, { useState } from "react";
import RecipeMultiStepForm from "./RecipeMultiStepForm";
import { useFormik } from "formik";
import { UserAuth } from "../../../context/AuthContext";

export const AddRecipe = () => {
  const { user } = UserAuth();

  const [initialNewRecipeData, setInitialNewRecipeData] = useState({
    addedBy: {
      user: user.displayName,
      photo: user.photoURL,
    },
    category: "",
    createdAt: "",
    image: "",
    ingredients: ["", "", ""],
    name: "",
    preparationTime: "",
    difficulty: "",
    description: "",
    preparationSteps: ["", "", ""],
    tags: [],
    likedBy: [],
  });

  const resetImage = () => {
    setInitialNewRecipeData(prev => {
      return {
        ...prev,
        image: ""
      }
    })
  }

  const updateInitialNewRecipeData = (newData) => {
    setInitialNewRecipeData(prev => ({...prev, ...newData}));
  };

  return (
    <RecipeMultiStepForm
      isNewRecipe={true}
      initialNewRecipeData={initialNewRecipeData}
      updateInitialNewRecipeData={updateInitialNewRecipeData}
    />
  );
};
