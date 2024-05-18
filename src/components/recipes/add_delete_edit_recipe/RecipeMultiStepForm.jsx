import {
  Container,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";
import Ingredients from "./Ingredients";
import Preparation from "./Preparation";
import Tags from "./Tags";

const RecipeMultiStepForm = ({ initialNewRecipeData, isNewRecipe, updateInitialNewRecipeData, resetImage }) => {
  const stepTitles = ["Dane", "Składniki", "Przygotowanie", "Tagi"];
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = (newData) => {
    setCurrentStep((prev) => prev + 1);
    updateInitialNewRecipeData(newData)
  };

  const handlePreviousStep = (newData) => {
    setCurrentStep((prev) => prev - 1);
    updateInitialNewRecipeData(newData)
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
    <Preparation />,
    <Tags />,
  ];

  return (
    <Container sx={{ margin: "50px auto" }} maxWidth="md">
      <Typography sx={{ marginBottom: "50px" }} variant="h4" align="center">
        {isNewRecipe ? "Dodaj" : "Edytuj"} przepis
      </Typography>
      <Stepper>
        {stepTitles.map((_, index) => {
          return (
            <Step key={index}>
              <StepLabel>{stepTitles[index]}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Box>{steps[currentStep]}</Box>
    </Container>
  );
};

export default RecipeMultiStepForm;
