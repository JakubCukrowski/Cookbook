import { useNavigate, useParams } from "react-router-dom";
import { UserAuth } from "../../../context/AuthContext";
import { useEffect, useState } from "react";
import RecipeMultiStepForm from "./RecipeMultiStepForm";
import { doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../../firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  deleteObject,
} from "firebase/storage";

export const EditRecipe = () => {
  const { recipes, user } = UserAuth();
  const { recipeId } = useParams();
  const [recipeToEdit, setRecipeToEdit] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (recipes) {
      const findRecipeToEdit = recipes.find((recipe) => recipe.id === recipeId);
      setRecipeToEdit(findRecipeToEdit);
    }
  }, [recipes]);

  const updateEditedRecipeData = (newData) => {
    setRecipeToEdit((prev) => ({ ...prev, ...newData }));
  };

  const submitForm = async (newData) => {
    try {
      if (!recipeToEdit.image.type) {
        updateEditedRecipeData(newData);
        await updateDoc(doc(db, "recipes", recipeToEdit.id), {
          ...recipeToEdit,
        });
      } else {
        const recipeImageLocation = ref(storage, `/recipe/${recipeToEdit.id}`);
        await listAll(recipeImageLocation).then((res) =>
          res.items.map((item) => {
            const imageToDeleteRef = ref(
              storage,
              `/recipe/${recipeToEdit.id}/${item.name}`
            );
            deleteObject(imageToDeleteRef);
          })
        );
        const storagePath = ref(
          storage,
          `/recipe/${recipeToEdit.id}/${recipeToEdit.image.name}`
        );
        const recipeStorageRef = ref(storage, storagePath);
        await uploadBytes(recipeStorageRef, recipeToEdit.image);
        await getDownloadURL(storagePath).then((url) => {
          updateDoc(doc(db, "recipes", recipeToEdit.id), {
            ...recipeToEdit,
            image: url,
          });
        });
        updateEditedRecipeData(newData);
      }
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {recipeToEdit && (
        <RecipeMultiStepForm
          initialNewRecipeData={recipeToEdit}
          updateInitialNewRecipeData={updateEditedRecipeData}
          submitForm={submitForm}
        />
      )}
    </>
  );
};
