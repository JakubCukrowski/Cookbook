import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../firebase";
import {
  setDoc,
  doc,
  getDoc,
  collection,
  onSnapshot,
  query,
} from "firebase/firestore";

const userContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const anonImage =
    "https://firebasestorage.googleapis.com/v0/b/przepisowa-pasja.appspot.com/o/profile%2Fanon-chef1.png?alt=media&token=f87cea4b-5659-4d0c-a951-7224c513e217";

  //checks if user is logged
  const [loading, setLoading] = useState(true);

  //user image state
  const [isUserImageUploaded, setIsUserImageUploaded] = useState(false);

  //recipes from firebase
  const [recipes, setRecipes] = useState([]);

  //checks if recipes are loaded
  const [isLoading, setIsLoading] = useState(true);

  //query results when searching for recipe/inredient etc
  const [queryResults, setQueryResults] = useState([]);

  //query
  const [queryText, setQueryText] = useState("");

  //pathname
  const pathname = window.location.pathname;

  //check if recipe was liked
  const [isRecipeLiked, setIsRecipeLiked] = useState(false);

  //recipes liked by user
  const [userLikedRecipes, setUserLikedRecipes] = useState([]);

  //create user in firebase with firestore data
  const createUser = (displayName, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredentials) => {
        const userRef = doc(db, "users", userCredentials.user.uid);
        await updateProfile(userCredentials.user, {
          displayName: displayName,
          photoURL: anonImage,
        });
        const docRef = await setDoc(userRef, {
          username: displayName,
          profilePhoto:
            "https://firebasestorage.googleapis.com/v0/b/przepisowa-pasja.appspot.com/o/profile%2Fanon-chef1.png?alt=media&token=f87cea4b-5659-4d0c-a951-7224c513e217",
          normalizedName: displayName
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase(),
          email: email,
          liked: [],
          followers: []
        });
        const updatedUser = {
          ...userCredentials.user,
          displayName: displayName,
        };
        setUser(updatedUser);
      })
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //logs out logged user
  const signout = () => {
    return signOut(auth);
  };

  const updateRecipes = (value) => {
    setRecipes(value);
  };

  //logic for query results
  const updateQueryResults = (array) => {
    setQueryResults(array);
  };

  //logic for updating query
  const updateQueryText = (value) => {
    setQueryText(value);
  };

  //donwload recipes from firebase
  useEffect(() => {
    const getRecipes = () => {
      const q = query(collection(db, "recipes"));
      onSnapshot(q, (querySnapshot) => {
        const tempRecipes = [];
        querySnapshot.forEach((recipe) => {
          tempRecipes.push({ ...recipe.data(), id: recipe.id });
        });
        setRecipes(tempRecipes);
      });
    };

    getRecipes();
  }, []);

  //clear querytext and queryresults
  useEffect(() => {
    if (pathname === "/") {
      setQueryResults([]);
      setQueryText("");
    }
  }, [pathname]);

  //on user state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [isUserImageUploaded]);

  //set display name for dashboard and navbar, download user docs
  useEffect(() => {
    if (user) {
      const getUserData = async () => {
        const userRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userRef);
      };

      getUserData();
    }
  }, [user]);

  //update recipe liked status
  const updateIsRecipeLiked = (value) => {
    setIsRecipeLiked(value);
  };

  //update recipes liked by user array
  const updateUserLikedRecipes = (value) => {
    setUserLikedRecipes(value);
  };

  return (
    <userContext.Provider
      value={{
        recipes,
        isLoading,
        user,
        updateRecipes,
        userLikedRecipes,
        updateUserLikedRecipes,
        isRecipeLiked,
        updateIsRecipeLiked,
        createUser,
        login,
        signout,
        isUserImageUploaded,
        setIsUserImageUploaded,
        updateQueryResults,
        queryResults,
        queryText,
        updateQueryText,
      }}
    >
      {!loading && children}
    </userContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(userContext);
};
