import React, { useState } from "react";
import { RecipeDetails } from "./RecipeDetails";
import { Ingredients } from "./Ingredients";
import { Preparation } from "./Preparation";
import { Button, Container, Form } from "react-bootstrap";

export const AddRecipe = () => {
  const [newRecipeDetails, setNewRecipeDetails] = useState({
    addedBy: '',
    category: '',
    createdAt: '',
    image: '',
    ingredients: [],
    likes: 0,
    name: "",
    preparationTime: "",
    difficulty: "",
    description: "",
    preparationSteps: [],
  });
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  //recipe details component functions
  const updateRecipeName = (value) => {
    setNewRecipeDetails((prev) => {
      return {
        ...prev,
        name: value,
      };
    });
  };

  const updatePrepTime = (value) => {
    setNewRecipeDetails((prev) => {
      return {
        ...prev,
        preparationTime: value,
      };
    });
  };

  const updateDiffLevel = (value) => {
    setNewRecipeDetails((prev) => {
      return {
        ...prev,
        difficulty: value,
      };
    });
  };

  const updateDesc = (value) => {
    setNewRecipeDetails((prev) => {
      return {
        ...prev,
        description: value,
      };
    });
  };

  /////////////////////

  const handleIngredients = () => {
    setNewRecipeDetails((prev) => {
      return {
        ...prev,
        ingredients: [...prev.ingredients, ''],
      };
    });
  };

  const handleIngredientsArray = (array) => {
    setNewRecipeDetails(prev => {
      return {
        ...prev,
        ingredients: array
      }
    })
  }

  const currentStep = [
    <RecipeDetails
      details={newRecipeDetails}
      updateName={updateRecipeName}
      prepTime={updatePrepTime}
      diffLevel={updateDiffLevel}
      desc={updateDesc}
    />,
    <Ingredients
      details={newRecipeDetails}
      handleIngredients={handleIngredients}
      handleIngredientsArray={handleIngredientsArray}
    />,
    <Preparation details={newRecipeDetails} />,
  ];

  const handleNext = () => {
    if (
      currentStepIndex <
      currentStep.indexOf(currentStep[currentStep.length - 1])
    ) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  return (
    <Container>
        <p style={{textAlign: "center"}}>Dodaj przepis {currentStepIndex + 1} / 3</p>
      <Form className="new-recipe-form">
        {currentStep[currentStepIndex]}
      </Form>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          marginTop: 50
        }}
      >
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          {currentStepIndex > 0 ? (
            <Button onClick={handlePrevious}>Wstecz</Button>
          ) : null}
        </div>
        <div
          style={{ width: "50%", display: "flex", justifyContent: "flex-end" }}
        >
          {currentStepIndex <
          currentStep.indexOf(currentStep[currentStep.length - 1]) ? (
            <Button onClick={handleNext}>Dalej</Button>
          ) : null}
        </div>
      </div>
    </Container>
  );
};
