import React, { useState } from "react";
import RecipeMultiStepForm from "./RecipeMultiStepForm";
import { UserAuth } from "../../../context/AuthContext";
import { storage, db } from "../../../firebase";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import CircularProgressPage from "../../../pages/CircularProgressPage";

export const AddRecipe = () => {
  const { user } = UserAuth();
  const navigate = useNavigate();
  const [adding, setAdding] = useState(null);

  const [initialNewRecipeData, setInitialNewRecipeData] = useState({
    addedBy: {
      user: user.displayName,
      userId: user.uid,
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

  const updateInitialNewRecipeData = (newData) => {
    setInitialNewRecipeData((prev) => ({ ...prev, ...newData }));
  };

  const submitForm = async (newData) => {
    setAdding(true);
    try {
      setInitialNewRecipeData(newData);
      const newRecipeRef = await addDoc(collection(db, "recipes"), {
        addedBy: initialNewRecipeData.addedBy,
        likedBy: initialNewRecipeData.likedBy,
        createdAt: Date.now(),
      });
      const recipeStorageRef = ref(
        storage,
        `/recipe/${newRecipeRef.id}/${initialNewRecipeData.image.name}`
      );
      await uploadBytes(recipeStorageRef, initialNewRecipeData.image);
      await getDownloadURL(
        ref(
          storage,
          `/recipe/${newRecipeRef.id}/${initialNewRecipeData.image.name}`
        )
      ).then((url) => {
        updateDoc(doc(db, "recipes", newRecipeRef.id), {
          ...initialNewRecipeData,
          image: url,
          createdAt: Date.now()
        });
      });
      setAdding(false)
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {adding ? (
        <CircularProgressPage />
      ) : (
        <RecipeMultiStepForm
          isNewRecipe={true}
          initialNewRecipeData={initialNewRecipeData}
          updateInitialNewRecipeData={updateInitialNewRecipeData}
          submitForm={submitForm}
        />
      )}
    </>
  );
};
