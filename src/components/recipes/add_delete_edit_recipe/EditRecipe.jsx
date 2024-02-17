import React, { useEffect, useState } from "react";
import { RecipeDetails } from "./RecipeDetails";
import { Ingredients } from "./Ingredients";
import { Preparation } from "./Preparation";
import { Button, Container, Form } from "react-bootstrap";
import { DataWrapper } from "../../../styles/DataWrapper";
import { UserAuth } from "../../../context/AuthContext";
import profanity from "../../../profanity.json";
import { useNavigate, useParams } from "react-router-dom";
import { collection, updateDoc, addDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import {
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { storage } from "../../../firebase";
import { NewRecipeContainer } from "../../../styles/Containers";
import { ButtonsContainer } from "../ButtonsContainer";
import { ButtonWrapper } from "../ButtonWrapper";
import { RecipeData } from "../../../context/RecipeContext";

export const EditRecipe = () => {
  const { user, handleAddedRecipe, userImage, recipes } = UserAuth();
  const {
    newRecipeDetails,
    updateNewRecipeDetails,
    newRecipeErrors,
    updateNewRecipeErrors,
    gibberishCheck,
  } = RecipeData();

  const { recipeId } = useParams();

  useEffect(() => {
    const recipeToEdit = recipes.find((recipe) => recipe.id === recipeId);

    if (recipeToEdit !== undefined) {
      updateNewRecipeDetails({
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

  //gathers profanity words
  const [profanityArray, setProfanityArray] = useState([]);

  const navigate = useNavigate();

  //steps state
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  //block submiting multiple times
  const [isSubmitted, setIsSubmitted] = useState(false);

  //shows if image file is actually an image
  const [isImage, setIsImage] = useState(null);

  //update user id while adding recipe
  useEffect(() => {
    if (user) {
      updateNewRecipeDetails((prev) => {
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

  //update category, name, preparation time, difficulty
  const updateRecipeDetails = (e) => {
    const { name, value } = e.target;
    updateNewRecipeDetails((prev) => {
      return {
        ...prev,
        name: name === "recipeName" ? value : prev.name,
        category: name === "category" ? value : prev.category,
        preparationTime:
          name === "preparationTime" ? value : prev.preparationTime,
        difficulty: name === "difficulty" ? value : prev.difficulty,
        description: name === "description" ? value : prev.description,
      };
    });

    console.log(newRecipeDetails.ingredients);

    //name validation
    if (name === "recipeName") {
      updateNewRecipeErrors((prev) => {
        return {
          ...prev,
          nameError: false,
        };
      });

      //handle swear words
      const singleWord = value.toLowerCase().split(" ").join("");

      profanity.forEach((word) => {
        if (singleWord.includes(word)) {
          setProfanityArray((prev) => [...prev, word]);
        }
      });

      if (singleWord.length === 0) {
        setProfanityArray([]);
      }
    }
  };

  //add image
  const updateImage = (value) =>
    updateNewRecipeDetails((prev) => ({ ...prev, image: value }));

  //check if image
  const checkIfImage = (value) => {
    setIsImage(value);
  };

  //adds ingredients and relative error
  const handleAddIngredients = () => {
    updateNewRecipeDetails((prev) => {
      return {
        ...prev,
        ingredients: [...prev.ingredients, ""],
      };
    });
    updateNewRecipeErrors((prev) => {
      return {
        ...prev,
        ingredientsErrors: [...prev.ingredientsErrors, false],
      };
    });
  };

  const handleIngredientsArray = (array) =>
    updateNewRecipeDetails((prev) => ({ ...prev, ingredients: array }));

  const handleIngredientsErrors = (array) =>
    updateNewRecipeErrors((prev) => ({ ...prev, ingredientsErrors: array }));

  //steps logic
  const addNextStep = () => {
    updateNewRecipeDetails((prev) => {
      return {
        ...prev,
        preparationSteps: [...prev.preparationSteps, ""],
      };
    });
    console.log(Object.keys(newRecipeDetails.preparationSteps).length);
  };

  //preparation stesp
  const handleStepsArray = (array) => {
    updateNewRecipeDetails((prev) => ({ ...prev, preparationSteps: array }));
  };

  const handleStepsErrors = (array) =>
    updateNewRecipeErrors((prev) => ({
      ...prev,
      preparationStepsErrors: array,
    }));

  const currentStep = [
    <RecipeDetails
      details={newRecipeDetails}
      errors={newRecipeErrors}
      updateImage={updateImage}
      updateRecipeDetails={updateRecipeDetails}
      gibberishCheck={gibberishCheck}
      isImage={isImage}
      checkIfImage={checkIfImage}
    />,
    <Ingredients
      details={newRecipeDetails}
      handleAddIngredients={handleAddIngredients}
      handleIngredientsArray={handleIngredientsArray}
      handleIngredientsErrors={handleIngredientsErrors}
      errors={newRecipeErrors}
      gibberishCheck={gibberishCheck}
    />,
    <Preparation
      details={newRecipeDetails}
      addNextStep={addNextStep}
      handleStepsArray={handleStepsArray}
      errors={newRecipeErrors}
      handleStepsErrors={handleStepsErrors}
    />,
  ];

  // next step logic
  const validateFirstStep = (e) => {
    e.preventDefault();
    if (profanityArray.length > 0) {
      navigate("/violation");
    }

    if (
      newRecipeDetails.name.length < 8 ||
      newRecipeDetails.name.match(gibberishCheck)
    ) {
      updateNewRecipeErrors((prev) => {
        return { ...prev, nameError: true };
      });
      window.scrollTo(0, 0);
    }

    if (newRecipeDetails.image === "") {
      updateNewRecipeErrors((prev) => {
        return { ...prev, imageError: true };
      });
      window.scrollTo(0, 0);
    }

    if (
      newRecipeDetails.category === "" ||
      newRecipeDetails.category === "default"
    ) {
      updateNewRecipeErrors((prev) => {
        return { ...prev, categoryError: true };
      });
    }

    if (
      currentStepIndex <
        currentStep.indexOf(currentStep[currentStep.length - 1]) &&
      newRecipeDetails.name.length >= 8 &&
      newRecipeDetails.image !== "" &&
      newRecipeDetails.category !== "" &&
      newRecipeDetails.category !== "default" &&
      !newRecipeDetails.name.match(gibberishCheck) &&
      isImage
    ) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const validateSecondStep = (e) => {
    e.preventDefault();
    const newIngredientsErrors = newRecipeErrors.ingredientsErrors;

    for (let i = 0; i < newRecipeDetails.ingredients.length; i++) {
      if (
        newRecipeDetails.ingredients[i].length === 0 ||
        (newRecipeDetails.ingredients[i].length >= 1 &&
          newRecipeDetails.ingredients[i].length <= 3) ||
        newRecipeDetails.ingredients[i].match(gibberishCheck)
      ) {
        newIngredientsErrors[i] = true;
      }
    }

    updateNewRecipeErrors((prev) => {
      return {
        ...prev,
        ingredientsErrors: newIngredientsErrors,
      };
    });

    if (newRecipeErrors.ingredientsErrors.every((error) => !error)) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  //previous step logic
  const handlePrevious = (e) => {
    e.preventDefault();
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

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

    updateNewRecipeErrors((prev) => {
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
    <NewRecipeContainer>
      <DataWrapper>
        <Container>
          <h2 style={{ textAlign: "center", paddingBottom: 50 }}>
            Edytuj przepis {currentStepIndex + 1} / 3
          </h2>
          <Form className="new-recipe-form" onSubmit={handleSubmitForm}>
            {currentStep[currentStepIndex]}

            <ButtonsContainer>
              <ButtonWrapper justify="flex-start">
                {currentStepIndex > 0 ? (
                  <Button variant="dark" onClick={handlePrevious}>
                    Wstecz
                  </Button>
                ) : null}
              </ButtonWrapper>
              <ButtonWrapper justify="flex-end">
                {currentStepIndex === 0 ? (
                  <Button
                    variant="dark"
                    type="button"
                    onClick={validateFirstStep}
                  >
                    Dalej
                  </Button>
                ) : null}
                {currentStepIndex === 1 ? (
                  <Button
                    variant="dark"
                    type="button"
                    onClick={validateSecondStep}
                  >
                    Dalej
                  </Button>
                ) : null}
                {currentStepIndex > 1 ? (
                  <Button variant="dark" type="submit">
                    Gotowe
                  </Button>
                ) : null}
              </ButtonWrapper>
            </ButtonsContainer>
          </Form>
        </Container>
      </DataWrapper>
    </NewRecipeContainer>
  );
};
