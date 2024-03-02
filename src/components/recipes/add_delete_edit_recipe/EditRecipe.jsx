import React, { useEffect, useState } from "react";
import { UserAuth } from "../../../context/AuthContext";
import { HandleRecipe } from "./HandleRecipe";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import {
  deleteObject,
  getDownloadURL,
  listAll,
  ref,
  uploadBytes,
} from "firebase/storage";
import { storage } from "../../../firebase";
import { useNavigate, useParams } from "react-router-dom";


export const EditRecipe = () => {
  const { handleAddedRecipe, recipes, user } = UserAuth();
  const navigate = useNavigate();
  const { recipeId } = useParams();

  const [recipeDetails, setRecipeDetails] = useState({
    category: "",
    createdAt: "",
    image: "",
    ingredients: "",
    likes: "",
    likedBy: "",
    name: "",
    preparationTime: "",
    difficulty: "",
    description: "",
    preparationSteps: "",
    tags: "",
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
    
    if (recipeToEdit !== undefined && recipeToEdit.addedBy.user === user.displayName) {
      setRecipeDetails({
        addedBy: {
          user: recipeToEdit.addedBy.user,
          photo: recipeToEdit.addedBy.photo,
        },
        category: recipeToEdit.category,
        createdAt: recipeToEdit.createdAt,
        image: recipeToEdit.image,
        ingredients: recipeToEdit.ingredients,
        likes: recipeToEdit.likes,
        likedBy: recipeToEdit.likedBy,
        name: recipeToEdit.name,
        preparationTime: recipeToEdit.preparationTime,
        difficulty: recipeToEdit.difficulty,
        description: recipeToEdit.description,
        preparationSteps: recipeToEdit.steps,
        tags: recipeToEdit.tags,
      });

      setRecipeErrors((prev) => {
        return {
          ...prev,
          ingredientsErrors: recipeToEdit.ingredients.map(() => false),
          preparationStepsErrors: recipeToEdit.steps.map(() => false),
        };
      });
    } else {
      navigate('/')
    }
  }, [recipes, user]);

  //block submiting multiple times
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateNewRecipeDetails = (value) => {
    setRecipeDetails(value);
  };

  const updateNewRecipeErrors = (value) => {
    setRecipeErrors(value);
  };

  const updateRecipeTags = (value) => {
    setRecipeDetails((prev) => {
      return {
        ...prev,
        tags: [...prev.tags, value],
      };
    });
  };

  const updateTagsArray = (array) => {
    setRecipeDetails((prev) => {
      return {
        ...prev,
        tags: array,
      };
    });
  };

  //submit form
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    //update document in firestore
    const recipeRef = doc(db, "recipes", recipeId);
    await updateDoc(recipeRef, {
      addedBy: {
        user: recipeDetails.addedBy.user,
        photo: recipeDetails.addedBy.photo,
      },
      category: recipeDetails.category,
      createdAt: recipeDetails.createdAt,
      ingredients: recipeDetails.ingredients,
      likes: recipeDetails.likes,
      name: recipeDetails.name,
      image: recipeDetails.image.name !== undefined ? "" : recipeDetails.image,
      likedBy: recipeDetails.likedBy,
      preparationTime: recipeDetails.preparationTime,
      difficulty: recipeDetails.difficulty,
      description: recipeDetails.description,
      steps: recipeDetails.preparationSteps,
      tags: recipeDetails.tags,
    });

    //HANDLE TO ON UPDATING IMAGE DELETE OLD ONE
    //create a storage for the image
    if (recipeDetails.image.name !== undefined) {
      //delete old image
      const oldImageRef = ref(storage, `recipe/${recipeId}`);
      await listAll(oldImageRef).then((res) =>
        deleteObject(ref(storage, res.items[0]._location.path_))
      );

      const recipesRef = ref(
        storage,
        `recipe/${recipeId}/${recipeDetails.image.name}`
      );

      //upload the image
      await uploadBytes(recipesRef, recipeDetails.image);

      //set the image url to document in firestore
      const currentRecipeRef = ref(
        storage,
        `/recipe/${recipeId}/${recipeDetails.image.name}`
      );

      await getDownloadURL(currentRecipeRef).then((url) => {
        updateDoc(doc(db, "recipes", recipeId), {
          image: url,
        });
      });
    }

    handleAddedRecipe();
    navigate("/dashboard");
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
