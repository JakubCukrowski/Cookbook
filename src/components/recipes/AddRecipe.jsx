import React, { useEffect, useState } from "react";
import { RecipeDetails } from "./RecipeDetails";
import { Ingredients } from "./Ingredients";
import { Preparation } from "./Preparation";
import { Button, Container, Form } from "react-bootstrap";
import { DataWrapper } from "../../styles/DataWrapper";
import { UserAuth } from "../../context/AuthContext";
import profanity from "../../profanity.json";
import { useNavigate } from "react-router-dom";
import { collection, updateDoc, addDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase";
import { PaddingContainer } from "../../styles/Containers";
import { ButtonsContainer } from "./ButtonsContainer";
import { ButtonWrapper } from "./ButtonWrapper";

export const AddRecipe = () => {
  const { user, handleAddedRecipe } = UserAuth();

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
    preparationSteps: { 0: "", 1: "", 2: "" },
  });

  const [newRecipeErrors, setNewRecipeErrors] = useState({
    categoryError: false,
    imageError: false,
    ingredientsErrors: [false, false, false],
    nameError: false,
    preparationSteps: false,
  });

  //gathers profanity words
  const [profanityArray, setProfanityArray] = useState([]);

  const navigate = useNavigate();

  //steps state
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  //update user id while adding recipe
  useEffect(() => {
    if (user) {
      setNewRecipeDetails((prev) => {
        return {
          ...prev,
          addedBy: user.uid,
        };
      });
    }
  }, []);

  //update category, name, preparation time, difficulty
  const updateRecipeDetails = (e) => {
    const { name, value } = e.target;
    setNewRecipeDetails((prev) => {
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

    //name validation
    if (name === "recipeName") {
      setNewRecipeErrors((prev) => {
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
  const updateImage = (value) => {
    return setNewRecipeDetails((prev) => {
      return {
        ...prev,
        image: value,
      };
    });
  };

  //ingredients logic
  const handleIngredients = () => {
    setNewRecipeDetails((prev) => {
      return {
        ...prev,
        ingredients: [...prev.ingredients, ""],
      };
    });

    setNewRecipeErrors((prev) => {
      return {
        ...prev,
        ingredientsErrors: [...prev.ingredientsErrors, false],
      };
    });
  };

  const handleIngredientsArray = (array) => {
    setNewRecipeDetails((prev) => {
      return {
        ...prev,
        ingredients: array,
      };
    });
  };

  const handleIngredientsErrors = (array) => {
    setNewRecipeErrors((prev) => {
      return {
        ...prev,
        ingredientsErrors: array,
      };
    });
  };

  //steps logic
  const addNextStep = () => {
    setNewRecipeDetails((prev) => {
      return {
        ...prev,
        preparationSteps: {
          ...prev.preparationSteps,
          [Object.keys(prev.preparationSteps).length]: "",
        },
      };
    });
  };

  const handleStepsObject = (object) => {
    setNewRecipeDetails((prev) => {
      return {
        ...prev,
        preparationSteps: object,
      };
    });
  };

  const currentStep = [
    <RecipeDetails
      details={newRecipeDetails}
      errors={newRecipeErrors}
      updateImage={updateImage}
      updateRecipeDetails={updateRecipeDetails}
    />,
    <Ingredients
      details={newRecipeDetails}
      handleIngredients={handleIngredients}
      handleIngredientsArray={handleIngredientsArray}
      handleIngredientsErrors={handleIngredientsErrors}
      errors={newRecipeErrors}
    />,
    <Preparation
      details={newRecipeDetails}
      addNextStep={addNextStep}
      handleStepsObject={handleStepsObject}
    />,
  ];

  // next step logic
  const validateFirstStep = (e) => {
    e.preventDefault();
    if (profanityArray.length > 0) {
      //tutaj będzie strona z errorem w przypadku podania wulgarnej nazwy przepisu
      navigate("/");
    }

    if (newRecipeDetails.name.length < 8) {
      setNewRecipeErrors((prev) => {
        return { ...prev, nameError: true };
      });
    }

    if (newRecipeDetails.image === "") {
      setNewRecipeErrors((prev) => {
        return { ...prev, imageError: true };
      });
    }

    if (
      newRecipeDetails.category === "" ||
      newRecipeDetails.category === "default"
    ) {
      setNewRecipeErrors((prev) => {
        return { ...prev, categoryError: true };
      });
    }

    if (
      currentStepIndex <
        currentStep.indexOf(currentStep[currentStep.length - 1]) &&
      newRecipeDetails.name.length >= 8 &&
      newRecipeDetails.image !== "" &&
      newRecipeDetails.category !== "" &&
      newRecipeDetails.category !== "default"
    ) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const validateSecondStep = (e) => {
    e.preventDefault();
    const newIngredientsErrors = newRecipeErrors.ingredientsErrors;

    for (let i = 0; i < newRecipeDetails.ingredients.length; i++) {
      if (newRecipeDetails.ingredients[i].length === 0) {
        newIngredientsErrors[i] = true;
      }
    }

    setNewRecipeErrors((prev) => {
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
    const currentDate = Date.now();
    e.preventDefault();

    //set document in firestore
    const docRef = await addDoc(collection(db, "recipes"), {
      addedBy: newRecipeDetails.addedBy,
      category: newRecipeDetails.category,
      createdAt: currentDate,
      ingredients: newRecipeDetails.ingredients,
      likes: newRecipeDetails.likes,
      name: newRecipeDetails.name,
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
    await uploadBytes(recipesRef, newRecipeDetails.image).then((snapshot) =>
      console.log(snapshot)
    );

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
  };

  return (
    <PaddingContainer>
      <DataWrapper>
        <Container>
          <h2 style={{ textAlign: "center", paddingBottom: 50 }}>
            Dodaj przepis {currentStepIndex + 1} / 3
          </h2>
          <Form className="new-recipe-form" onSubmit={handleSubmitForm}>
            {currentStep[currentStepIndex]}

            <ButtonsContainer>
              <ButtonWrapper justify="flex-start">
                {currentStepIndex > 0 ? (
                  <Button onClick={handlePrevious}>Wstecz</Button>
                ) : null}
              </ButtonWrapper>
              <ButtonWrapper justify="flex-end">
                {currentStepIndex === 0 ? (
                  <Button type="button" onClick={validateFirstStep}>
                    Dalej
                  </Button>
                ) : null}
                {currentStepIndex === 1 ? (
                  <Button type="button" onClick={validateSecondStep}>
                    Dalej
                  </Button>
                ) : null}
                {currentStepIndex > 1 ? (
                  <Button type="submit">Gotowe</Button>
                ) : null}
              </ButtonWrapper>
            </ButtonsContainer>
          </Form>
        </Container>
      </DataWrapper>
    </PaddingContainer>
  );
};
