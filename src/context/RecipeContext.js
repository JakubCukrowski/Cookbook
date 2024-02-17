import { createContext, useContext, useEffect, useState } from "react";

const recipeContext = createContext();

export const RecipeContextProvider = ({ children }) => {
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

  const updateNewRecipeDetails = (value) => {
    setNewRecipeDetails(value);
  };

  const [newRecipeErrors, setNewRecipeErrors] = useState({
    categoryError: false,
    imageError: false,
    ingredientsErrors: [false, false, false],
    nameError: false,
    preparationStepsErrors: [false, false, false],
  });

  const updateNewRecipeErrors = (value) => {
    setNewRecipeErrors(value);
  };

  //gibberish regex
  const gibberishCheck = /(.)\1{2,}/;

   //shows if image file is actually an image
   const [isImage, setIsImage] = useState(null);

   const checkIfImage = (value) => {
    setIsImage(value)
   }

  return (
    <recipeContext.Provider
      value={{
        newRecipeDetails,
        updateNewRecipeDetails,
        newRecipeErrors,
        updateNewRecipeErrors,
        gibberishCheck,
        isImage,
        checkIfImage
      }}
    >
      {children}
    </recipeContext.Provider>
  );
};

export const RecipeData = () => {
    return useContext(recipeContext)
}
