import {
  collection,
  getDocs,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
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
    const getRecipes = async () => {
      const q = query(collection(db, "recipes"), limit(10));
      const unsub = onSnapshot(q, (querySnapshot) => {
        const tempRecipes = [];
        querySnapshot.forEach((recipe) => {
          tempRecipes.push({ ...recipe.data(), id: recipe.id });
        });
        setRecipes(tempRecipes);
      });

      if (user) {
        const userRecipesCollection = query(
          collection(db, "recipes"),
          where("addedBy.user", "==", user.displayName)
        );
        const userRecipesSnapshot = await getDocs(userRecipesCollection);
        const tempUserRecipes = [];
        userRecipesSnapshot.forEach((recipe) => {
          tempUserRecipes.push({ ...recipe.data(), id: recipe.id });
        });
        setRecipesAddedByUser(tempUserRecipes);
      }
    };

    getRecipes();
  }, [user]);

  useEffect(() => {
    const updateDashboardRecipes = async () => {
      if (user) {
        const likedRecipesCollection = query(
          collection(db, "recipes"),
          where("likedBy", "array-contains", user.uid)
        );

        const likedRecipesSnapshot = await getDocs(likedRecipesCollection);
        const tempLiked = [];
        likedRecipesSnapshot.forEach((recipe) => {
          tempLiked.push({ ...recipe.data(), id: recipe.id });
        });
        setRecipesLikedByUser(tempLiked);
      }
    };

    updateDashboardRecipes();
  }, [recipes]);

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
