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
    tags: ''
  });

  const [recipeErrors, setRecipeErrors] = useState({
    categoryError: false,
    imageError: false,
    ingredientsErrors: [false, false, false],
    nameError: false,
    preparationStepsErrors: [false, false, false],
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
        tags: recipeToEdit.tags
      });

      setRecipeErrors((prev) => {
        return {
          ...prev,
          ingredientsErrors: recipeToEdit.ingredients.map(() => false),
          preparationStepsErrors: recipeToEdit.steps.map(() => false),
        };
      });
    }
  }, [recipes]);

  //block submiting multiple times
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateNewRecipeDetails = (value) => {
    setRecipeDetails(value);
  };

  const updateNewRecipeErrors = (value) => {
    setRecipeErrors(value);
  };

  const updateRecipeTags = (value) => {
    setRecipeDetails(prev => {
      return {
        ...prev,
        tags: [...prev.tags, value]
      }
    })
  }

  const updateTagsArray = (array) => {
    setRecipeDetails(prev => {
      return {
        ...prev,
        tags: array
      }
    })
  }

  //update user id while adding recipe
  useEffect(() => {
    if (user) {
      setRecipeDetails((prev) => {
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

    const newPreparationErrors = recipeErrors.preparationStepsErrors;
    const preparationStepsObject = Object.keys(
      recipeDetails.preparationSteps
    );
    const mappedPreparationSteps = preparationStepsObject.map(
      (step) => recipeDetails.preparationSteps[step]
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

    setRecipeErrors((prev) => {
      return {
        ...prev,
        preparationStepsErrors: newPreparationErrors,
      };
    });

    if (recipeErrors.preparationStepsErrors.every((error) => !error)) {
      setIsSubmitted(true);
      const currentDate = Date.now();

      //set document in firestore
      const docRef = await addDoc(collection(db, "recipes"), {
        addedBy: recipeDetails.addedBy,
        category: recipeDetails.category,
        createdAt: currentDate,
        ingredients: recipeDetails.ingredients,
        likes: recipeDetails.likes,
        name: recipeDetails.name,
        likedBy: [],
        preparationTime: recipeDetails.preparationTime,
        difficulty: recipeDetails.difficulty,
        description: recipeDetails.description,
        steps: recipeDetails.preparationSteps,
      });

      //create a storage for the image
      const recipesRef = ref(
        storage,
        `recipe/${docRef.id}/${recipeDetails.image.name}`
      );

      //upload the image
      await uploadBytes(recipesRef, recipeDetails.image);

      //set the image url to document in firestore
      const currentRecipeRef = ref(
        storage,
        `/recipe/${docRef.id}/${recipeDetails.image.name}`
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
        h2Text={"Edytuj"}
        updateNewRecipeErrors={updateNewRecipeErrors}
        newRecipeErrors={recipeErrors}
        isSubmitted={isSubmitted}
        handleSubmitForm={handleSubmitForm}
        updateRecipeTags={updateRecipeTags}
        updateTagsArray={updateTagsArray}
      />
    </>
  );
};
