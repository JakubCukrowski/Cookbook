import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc, getDocs, collection, updateDoc } from "firebase/firestore";
import { storage } from "../firebase";
import { ref, getMetadata, getDownloadURL, listAll } from "firebase/storage";

const userContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

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
  const [isRecipeAdded, setIsRecipeAdded] = useState(false)

  //query results when searching for recipe/inredient etc
  const [queryResults, setQueryResults] = useState([])

  //create user in firebase with firestore data
  const createUser = (displayName, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredentials) => {
        const userDoc = await setDoc(
          doc(db, "users", userCredentials.user.uid),
          {
            username: displayName,
            email: email,
            liked: [],
            userRecipes: [],
          }
        );
        return updateProfile(userCredentials.user, {
          displayName: displayName,
        });
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

  //on user state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe;
  }, []);

  //set display name for dashboard and navbar
  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName);
    }
  }, [user]);

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

  //update the photo
  useEffect(() => {
    if (user) {
      //user profile image storage
      checkIfProfilePhotoAvailable(user.uid);
    }
  }, [user, isUserImageUploaded]);

  //donwload recipes from firebase
  useEffect(() => {

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
              const recipeImageRef = ref(storage, `/recipe/${recipe.id}/${itemRef.name}`
              );
              await getDownloadURL(recipeImageRef).then(async (url) => {
                setRecipes((prev) => [
                  ...prev,
                  { ...recipe.data(), id: recipe.id, image: url },
                ]);
                
                const recipeRef = doc(db, 'recipes', recipe.id)
                await updateDoc(recipeRef, {
                  image: url
                })
                setIsLoading(false);
              });
            });
          })
          .catch((error) => console.log(error));
      });

    };

    getRecipes();
  }, [isRecipeAdded]);

  //function to handle state or added recipe
  const handleAddedRecipe = () => {
    setIsRecipeAdded(true)

    const timeout = setTimeout(() => {
      setIsRecipeAdded(false)

    }, 1000)
  }

  //logic for query results 
  const updateQueryResults = (array) => {
    setQueryResults(array)
  }

  return (
    <userContext.Provider
      value={{
        recipes,
        isLoading,
        user,
        createUser,
        login,
        signout,
        URL,
        userImage,
        isUserImageUploaded,
        setIsUserImageUploaded,
        displayName,
        setDisplayName,
        handleAddedRecipe,
        isRecipeAdded,
        updateQueryResults,
        queryResults
      }}
    >
      {!loading && children}
    </userContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(userContext);
};
