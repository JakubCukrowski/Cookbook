import { Container, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";
import Ingredients from "./Ingredients";
import Preparation from "./Preparation";
import Tags from "./Tags";
import CustomSteppers from "../../CustomSteppers";

const RecipeMultiStepForm = ({
  initialNewRecipeData,
  isNewRecipe,
  updateInitialNewRecipeData,
  resetImage,
}) => {
  const stepTitles = [
    "Szczegóły przepisu",
    "Składniki",
    "Przygotowanie",
    "Tagi",
  ];
  const [currentStep, setCurrentStep] = useState(3);

  const handleNextStep = (newData) => {
    setCurrentStep((prev) => prev + 1);
    updateInitialNewRecipeData(newData);
  };

  const handlePreviousStep = (newData) => {
    setCurrentStep((prev) => prev - 1);
    updateInitialNewRecipeData(newData);
  };

  const steps = [
    <RecipeDetails
      initialNewRecipeData={initialNewRecipeData}
      handleNextStep={handleNextStep}
      resetImage={resetImage}
    />,
    <Ingredients
      initialNewRecipeData={initialNewRecipeData}
      handleNextStep={handleNextStep}
      handlePreviousStep={handlePreviousStep}
    />,
    <Preparation
      initialNewRecipeData={initialNewRecipeData}
      handleNextStep={handleNextStep}
      handlePreviousStep={handlePreviousStep}
    />,
    <Tags
      initialNewRecipeData={initialNewRecipeData}
      handleNextStep={handleNextStep}
      handlePreviousStep={handlePreviousStep}
    />,
  ];

  return (
    <Container sx={{ margin: "50px auto" }} maxWidth="md">
      <Typography sx={{ marginBottom: "50px" }} variant="h4" align="center">
        {isNewRecipe ? "Dodaj" : "Edytuj"} przepis
      </Typography>
      <CustomSteppers currentStep={currentStep} stepTitles={stepTitles} />
      <Box>{steps[currentStep]}</Box>
    </Container>
  );
};

export default RecipeMultiStepForm;
