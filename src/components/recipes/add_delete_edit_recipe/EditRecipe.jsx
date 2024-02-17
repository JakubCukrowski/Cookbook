import React, { useEffect, useState } from "react";
import { UserAuth } from "../../../context/AuthContext";
import { HandleRecipe } from "./HandleRecipe";
import { collection, updateDoc, addDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../firebase";
import { useNavigate, useParams } from "react-router-dom";

export const EditRecipe = () => {
  const { user, userImage, handleAddedRecipe, recipes } = UserAuth();
  const navigate = useNavigate();
  const { recipeId } = useParams();

  const [recipeDetails, setRecipeDetails] = useState({
    addedBy: '',
    category: '',
    createdAt: '',
    image: '',
    ingredients: '',
    likes: '',
    name: '',
    preparationTime: '',
    difficulty: '',
    description: '',
    preparationSteps: '',
  });

  useEffect(() => {
    const recipeToEdit = recipes.find((recipe) => recipe.id === recipeId);

    if (recipeToEdit !== undefined) {
      setRecipeDetails({
        addedBy: recipeToEdit.addedBy,
        category: recipeToEdit.category,
        createdAt: recipeToEdit.createdAt,
        image: recipeToEdit.image,
        ingredients: recipeToEdit.ingredients,
        likes: recipeToEdit.likes,
        name: recipeToEdit.name,
        preparationTime: recipeToEdit.preparationTime,
        difficulty: recipeToEdit.difficulty,
        description: recipeToEdit.description,
        preparationSteps: recipeToEdit.steps,
      });

      updateNewRecipeErrors((prev) => {
        return {
          ...prev,
          ingredientsErrors: recipeToEdit.ingredients.map(() => false),
          preparationStepsErrors: recipeToEdit.steps.map(() => false),
        };
      });
    }
  }, [recipes]);

  const [newRecipeDetails, setNewRecipeDetails] = useState({
    addedBy: "",
    category: "",
    createdAt: "",
    image: "",
    ingredients: ["", "", ""],
    likes: 0,
    name: "",
    preparationTime: "15",
    difficulty: "easy",
    description: "",
    preparationSteps: ["", "", ""],
  });

  const [newRecipeErrors, setNewRecipeErrors] = useState({
    categoryError: false,
    imageError: false,
    ingredientsErrors: [false, false, false],
    nameError: false,
    preparationStepsErrors: [false, false, false],
  });

  //block submiting multiple times
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateNewRecipeDetails = (value) => {
    setNewRecipeDetails(value);
  };

  const updateNewRecipeErrors = (value) => {
    setNewRecipeErrors(value);
  };

  //update user id while adding recipe
  useEffect(() => {
    if (user) {
      setNewRecipeDetails((prev) => {
        return {
          ...prev,
          addedBy: {
            user: user.displayName,
            photo: userImage,
          },
        };
      });
    }
  }, []);

  //submit form
  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const newPreparationErrors = newRecipeErrors.preparationStepsErrors;
    const preparationStepsObject = Object.keys(
      newRecipeDetails.preparationSteps
    );
    const mappedPreparationSteps = preparationStepsObject.map(
      (step) => newRecipeDetails.preparationSteps[step]
    );

    for (let i = 0; i < mappedPreparationSteps.length; i++) {
      if (
        mappedPreparationSteps[i].length === 0 ||
        (mappedPreparationSteps[i].length > 0 &&
          mappedPreparationSteps[i].length < 15)
      ) {
        newPreparationErrors[i] = true;
      }
    }

    setNewRecipeErrors((prev) => {
      return {
        ...prev,
        preparationStepsErrors: newPreparationErrors,
      };
    });

    if (newRecipeErrors.preparationStepsErrors.every((error) => !error)) {
      setIsSubmitted(true);
      const currentDate = Date.now();

      //set document in firestore
      const docRef = await addDoc(collection(db, "recipes"), {
        addedBy: newRecipeDetails.addedBy,
        category: newRecipeDetails.category,
        createdAt: currentDate,
        ingredients: newRecipeDetails.ingredients,
        likes: newRecipeDetails.likes,
        name: newRecipeDetails.name,
        likedBy: [],
        preparationTime: newRecipeDetails.preparationTime,
        difficulty: newRecipeDetails.difficulty,
        description: newRecipeDetails.description,
        steps: newRecipeDetails.preparationSteps,
      });

      //create a storage for the image
      const recipesRef = ref(
        storage,
        `recipe/${docRef.id}/${newRecipeDetails.image.name}`
      );

      //upload the image
      await uploadBytes(recipesRef, newRecipeDetails.image);

      //set the image url to document in firestore
      const currentRecipeRef = ref(
        storage,
        `/recipe/${docRef.id}/${newRecipeDetails.image.name}`
      );

      await getDownloadURL(currentRecipeRef).then((url) => {
        updateDoc(doc(db, "recipes", docRef.id), {
          image: url,
        });
      });

      handleAddedRecipe();
      navigate("/dashboard");
    }
  };

  return (
    <>
      <HandleRecipe
        newRecipeDetails={recipeDetails}
        updateNewRecipeDetails={updateNewRecipeDetails}
        h2Text={"Dodaj"}
        updateNewRecipeErrors={updateNewRecipeErrors}
        newRecipeErrors={newRecipeErrors}
        isSubmitted={isSubmitted}
        handleSubmitForm={handleSubmitForm}
      />
    </>
  );
};
