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
  getDocs,
  collection,
  updateDoc,
} from "firebase/firestore";
import { storage } from "../firebase";
import { ref, getMetadata, getDownloadURL, listAll } from "firebase/storage";

const userContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState("");

  //checks if user is logged
  const [loading, setLoading] = useState(true);

  //user image state
  const [userImage, setUserImage] = useState(null);
  const [isUserImageUploaded, setIsUserImageUploaded] = useState(false);

  //user data
  const [displayName, setDisplayName] = useState("");

  //recipes from firebase
  const [recipes, setRecipes] = useState([]);

  //checks if recipes are loaded
  const [isLoading, setIsLoading] = useState(true);

  //state to re render recipes
  const [isRecipeAdded, setIsRecipeAdded] = useState(false);

  //query results when searching for recipe/inredient etc
  const [queryResults, setQueryResults] = useState([]);
  //query
  const [queryText, setQueryText] = useState("");

  //pathname
  const pathname = window.location.pathname;

  //create user in firebase with firestore data
  const createUser = (displayName, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredentials) => {
        const userRef = doc(db, "users", userCredentials.user.uid);
        await updateProfile(userCredentials.user, {
          displayName: displayName,
        });
        const docRef = await setDoc(userRef, {
          username: displayName,
          email: email,
          liked: [],
        });
        const updatedUser = {
          ...userCredentials.user,
          displayName: displayName,
        };
        setUser(updatedUser);
      })
      .catch((error) => console.log(error));
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //logs out logged user
  const signout = () => {
    return signOut(auth);
  };

  //check if profile photo exists logic
  const checkIfProfilePhotoAvailable = async (id) => {
    const profileImageRef = ref(storage, `/profile/${id}/profile_photo`);
    const basicImageRef = ref(storage, "profile/anon-chef1.png");

    try {
      await getMetadata(profileImageRef)
        .then(() => {
          getDownloadURL(profileImageRef).then((url) => {
            setUserImage(url);
          });
        })
        .catch((error) => {
          if (error.code === "storage/object-not-found") {
            getDownloadURL(basicImageRef).then((url) => {
              setUserImage(url);
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  //function to handle state and added recipe
  const handleAddedRecipe = () => {
    setIsRecipeAdded(true);

    const timeout = setTimeout(() => {
      setIsRecipeAdded(false);
    }, 1000);

    clearTimeout(timeout);
  };

  //logic for query results
  const updateQueryResults = (array) => {
    setQueryResults(array);
  };

  //logic for updating query
  const updateQueryText = (value) => {
    setQueryText(value);
  };

  //update user image (to null when logged out)
  const updateUserImage = (value) => {
    setUserImage(value)
  }

  //update the photo
  useEffect(() => {
    if (user) {
      //user profile image storage
      checkIfProfilePhotoAvailable(user.uid);
    }
  }, [user, isUserImageUploaded]);

  //donwload recipes from firebase
  useEffect(() => {
    setRecipes([]);

    const getRecipes = async () => {
      //get to the collection first
      const recipesRef = collection(db, "recipes");
      const recipesFromFirebase = await getDocs(recipesRef);

      //copy array of recipes to the state, then add recipe.id and recipe url, usable for adding recipe
      recipesFromFirebase.forEach(async (recipe) => {
        const listRef = ref(storage, `recipe/${recipe.id}`);

        await listAll(listRef)
          .then((response) => {
            response.items.map(async (itemRef) => {
              const recipeImageRef = ref(
                storage,
                `/recipe/${recipe.id}/${itemRef.name}`
              );
              await getDownloadURL(recipeImageRef).then(async (url) => {
                setRecipes((prev) => [
                  ...prev,
                  { ...recipe.data(), id: recipe.id, image: url },
                ]);

                const recipeRef = doc(db, "recipes", recipe.id);
                await updateDoc(recipeRef, {
                  image: url,
                });
                setIsLoading(false);
              });
            });
          })
          .catch((error) => console.log(error));
      });
    };

    getRecipes();
  }, [isRecipeAdded]);

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
  }, [setUser]);

  //set display name for dashboard and navbar, download user docs
  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName);

      const getUserData = async () => {
        const userRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userRef);
        setUserData(userDoc.data().liked)
      };
  
      getUserData()
    }
  }, [user]);

  return (
    <userContext.Provider
      value={{
        recipes,
        isLoading,
        user,
        userData,
        pathname,
        createUser,
        login,
        signout,
        userImage,
        updateUserImage,
        isUserImageUploaded,
        setIsUserImageUploaded,
        displayName,
        handleAddedRecipe,
        isRecipeAdded,
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
