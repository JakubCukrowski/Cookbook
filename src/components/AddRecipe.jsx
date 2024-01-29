import React, { useEffect, useState } from "react";
import { RecipeDetails } from "./RecipeDetails";
import { Ingredients } from "./Ingredients";
import { Preparation } from "./Preparation";
import { Button, Container, Form } from "react-bootstrap";
import { DataWrapper } from "../styles/DataWrapper";
import { UserAuth } from "../context/AuthContext";
import profanity from "../profanity.json";
import { useNavigate } from "react-router-dom";
import { collection, updateDoc, addDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";

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
    preparationTime: "",
    difficulty: "",
    description: "",
    preparationSteps: { 0: "", 1: "", 2: "" },
  });

  const [newRecipeErrors, setNewRecipeErrors] = useState({
    categoryError: false,
    imageError: false,
    ingredientsError: false,
    nameError: false,
    preparationSteps: false,
  });

  //gathers profanity words
  const [profanityArray, setProfanityArray] = useState([]);

  const navigate = useNavigate();

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

  //update category
  const updateCategory = (value) => {
    setNewRecipeDetails((prev) => {
      return {
        ...prev,
        category: value,
      };
    });
  };

  //recipe details component functions
  const updateRecipeName = (value) => {
    setNewRecipeDetails((prev) => {
      return {
        ...prev,
        name: value,
      };
    });

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
  };

  const updateImage = (value) => {
    return setNewRecipeDetails((prev) => {
      return {
        ...prev,
        image: value,
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

  //ingredients logic
  const handleIngredients = () => {
    setNewRecipeDetails((prev) => {
      return {
        ...prev,
        ingredients: [...prev.ingredients, ""],
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

  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  //profanity

  const currentStep = [
    <RecipeDetails
      details={newRecipeDetails}
      updateName={updateRecipeName}
      prepTime={updatePrepTime}
      diffLevel={updateDiffLevel}
      desc={updateDesc}
      errors={newRecipeErrors}
      updateImage={updateImage}
      updateCategory={updateCategory}
    />,
    <Ingredients
      details={newRecipeDetails}
      handleIngredients={handleIngredients}
      handleIngredientsArray={handleIngredientsArray}
    />,
    <Preparation
      details={newRecipeDetails}
      addNextStep={addNextStep}
      handleStepsObject={handleStepsObject}
    />,
  ];

  // next step logic
  const handleNext = (e) => {
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
  };

  return (
    <Container>
      <DataWrapper>
        <Container>
          <h2 style={{ textAlign: "center", marginBottom: 20 }}>
            Dodaj przepis {currentStepIndex + 1} / 3
          </h2>
          <Form className="new-recipe-form" onSubmit={handleSubmitForm}>
            {currentStep[currentStepIndex]}

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
                marginTop: 50,
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
                style={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                {currentStepIndex <
                currentStep.indexOf(currentStep[currentStep.length - 1]) ? (
                  <Button onClick={handleNext}>Dalej</Button>
                ) : (
                  <input type="submit" value="Gotowe!" />
                )}
              </div>
            </div>
          </Form>
        </Container>
      </DataWrapper>
    </Container>
  );
};
