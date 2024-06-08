import { collection, getDocs, query, where } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { UserAuth } from "./AuthContext";

const recipesContext = createContext();

export const RecipesContextProvider = ({ children }) => {
  const { user } = UserAuth();
  const [recipes, setRecipes] = useState([]);
  const [queryResults, setQueryResults] = useState([]);
  const [queryText, setQueryText] = useState("");
  const [recipesAddedByUser, setRecipesAddedByUser] = useState([]);
  const [recipesLikedByUser, setRecipesLikedByUser] = useState([]);

  const pathname = window.location.pathname;

  const updateQueryResults = (array) => {
    setQueryResults(array);
  };

  const updateQueryText = (value) => {
    setQueryText(value);
  };

  useEffect(() => {
    if (pathname === "/") {
      setQueryResults([]);
      setQueryText("");
    }
  }, [pathname]);

  useEffect(() => {
    setRecipesAddedByUser([]);
    setRecipesLikedByUser([]);
    const getRecipes = async () => {
      if (user) {
        const q = query(collection(db, "recipes"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((recipe) => {
          setRecipes((prev) => [...prev, { ...recipe.data(), id: recipe.id }]);
        });

        const userRecipesCollection = query(
          collection(db, "recipes"),
          where("addedBy.user", "==", user.displayName)
        );
        const userRecipesSnapshot = await getDocs(userRecipesCollection);
        userRecipesSnapshot.forEach((recipe) => {
          setRecipesAddedByUser((prev) => [
            ...prev,
            { ...recipe.data(), id: recipe.id },
          ]);
        });

        const likedRecipesCollection = query(
          collection(db, "recipes"),
          where("likedBy", "array-contains", user.uid)
        );
        const likedRecipesSnapshot = await getDocs(likedRecipesCollection);
        likedRecipesSnapshot.forEach((recipe) => {
          setRecipesLikedByUser((prev) => [
            ...prev,
            { ...recipe.data(), id: recipe.id },
          ]);
        });
      }
    };

    getRecipes();
  }, [user]);

  useEffect(() => {});

  return (
    <recipesContext.Provider
      value={{
        recipes,
        recipesAddedByUser,
        recipesLikedByUser,
        updateQueryResults,
        queryResults,
        queryText,
        updateQueryText,
      }}
    >
      {children}
    </recipesContext.Provider>
  );
};

export const RecipesProvider = () => {
  return useContext(recipesContext);
};
