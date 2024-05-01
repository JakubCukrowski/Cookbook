import React, { useEffect, useState } from "react";
import { UserAuth } from "../../../context/AuthContext";
import { HandleRecipe } from "./HandleRecipe";
import {
  collection,
  updateDoc,
  addDoc,
  doc,
  query,
  where,
  getDoc,
  getDocs,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../firebase";
import { useNavigate } from "react-router-dom";

export const AddRecipe = () => {
  const { user, updateRecipes } = UserAuth();
  const navigate = useNavigate();

  const [newRecipeDetails, setNewRecipeDetails] = useState({
    addedBy: "",
    category: "",
    createdAt: "",
    image: "",
    ingredients: ["", "", ""],
    name: "",
    preparationTime: "15 minut",
    difficulty: "easy",
    description: "",
    preparationSteps: ["", "", ""],
    tags: [],
    likedBy: [],
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

  //preview image on add
  const [imagePreview, setImagePreview] = useState(null);

  const currentDate = Date.now();

  //update image preview
  const updateImagePreview = (value) => {
    setImagePreview(value);
  };

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
            photo: user.photoURL,
          },
        };
      });
    }
  }, [user]);

  //submit form
  const handleSubmitForm = async (e) => {
    e.preventDefault();

    setIsSubmitted(true);

    //set document in firestore
    const docRef = await addDoc(collection(db, "recipes"), {
      addedBy: newRecipeDetails.addedBy,
      category: newRecipeDetails.category,
      createdAt: currentDate,
      ingredients: newRecipeDetails.ingredients,
      name: newRecipeDetails.name,
      likedBy: newRecipeDetails.likedBy,
      preparationTime: newRecipeDetails.preparationTime,
      difficulty: newRecipeDetails.difficulty,
      description: newRecipeDetails.description,
      steps: newRecipeDetails.preparationSteps,
      tags: newRecipeDetails.tags,
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
      setNewRecipeDetails((prev) => {
        return {
          ...prev,
          image: url,
        };
      });
      updateRecipes((prev) => {
        return [...prev, { ...newRecipeDetails, image: url, id: docRef.id }];
      });
    });

    // download all users which are following the recipe creator
    const userRef = doc(db, "users", user.uid);
    const loggedUserDoc = await getDoc(userRef);
    const usersRef = collection(db, "users");

    //notify followers of adding new recipe
    if (loggedUserDoc.data().followers) {
      const q = query(
        usersRef,
        where('following', "array-contains", user.displayName)
      );
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach(async follower => {
        const followerRef = doc(db, 'users', follower.id)
        await updateDoc(followerRef, {
          notifications: arrayUnion({
            recipeName: newRecipeDetails.name,
            addedBy: newRecipeDetails.addedBy.user,
            read: false,
            recipeId: docRef.id,
            addDate: currentDate,
            type: 'newRecipe'
          })
        })
      })
    }

    navigate("/dashboard");
  };

  const updateRecipeTags = (value) => {
    setNewRecipeDetails((prev) => {
      return {
        ...prev,
        tags: [...prev.tags, value],
      };
    });
  };

  const updateTagsArray = (array) => {
    setNewRecipeDetails((prev) => {
      return {
        ...prev,
        tags: array,
      };
    });
  };

  return (
    <>
      <HandleRecipe
        newRecipeDetails={newRecipeDetails}
        updateNewRecipeDetails={updateNewRecipeDetails}
        h2Text={"Dodaj"}
        updateNewRecipeErrors={updateNewRecipeErrors}
        newRecipeErrors={newRecipeErrors}
        isSubmitted={isSubmitted}
        handleSubmitForm={handleSubmitForm}
        updateRecipeTags={updateRecipeTags}
        updateTagsArray={updateTagsArray}
        imagePreview={imagePreview}
        updateImagePreview={updateImagePreview}
      />
    </>
  );
};
