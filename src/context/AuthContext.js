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
  updateDoc,
  arrayRemove,
} from "firebase/firestore";
import { storage } from "../firebase";
import { ref, getMetadata, getDownloadURL } from "firebase/storage";

const userContext = createContext();

export const AuthContextProvider = ({ children }) => {
  //fake recipes for awaiting api response (api goes to sleep after inactive)
  const [recipes, setRecipes] = useState([
    "recipe1",
    "recipe2",
    "recipe3",
    "recipe4",
  ]);

  //checks if recipes are loaded
  const [isLoading, setIsLoading] = useState(true);
  const URL = "https://food-api-7ukw.onrender.com/api/recipes";
  const [user, setUser] = useState(null);

  //checks if user is logged
  const [loading, setLoading] = useState(true);

  //liked recipes
  const [likedRecipes, setLikedRecipes] = useState([]);

  //user image state
  const [userImage, setUserImage] = useState(null);
  const [isUserImageUploaded, setIsUserImageUploaded] = useState(false);

  const checkIfExists = (data) => {
    return likedRecipes.some((recipe) => data === recipe._id);
  };

  //dislike recipe
  const dislikeRecipe = async (data) => {
    const newLikedRecipes = likedRecipes.filter(
      (recipe) => data !== recipe._id
    );
    setLikedRecipes(newLikedRecipes);

    const clickedRecipe = likedRecipes.find((recipe) => data === recipe._id);
    const docRef = doc(db, "users", user.uid);
    await updateDoc(docRef, {
      liked: arrayRemove(clickedRecipe),
    });
  };

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

  //fetching recipes and logging in
  useEffect(() => {
    const fetchRecipes = async () => {
      await fetch(URL)
        .then((response) => response.json())
        .then((response) => {
          setRecipes(response);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    };

    fetchRecipes();
  }, []);

  //on user state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe;
  }, []);

  //blocked liked recipes by user
  useEffect(() => {
    const getLikedRecipes = async () => {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      setLikedRecipes(docSnap.data().liked);
    };

    if (user) {
      getLikedRecipes();
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

  return (
    <userContext.Provider
      value={{
        recipes,
        isLoading,
        user,
        createUser,
        login,
        signout,
        likedRecipes,
        setLikedRecipes,
        checkIfExists,
        dislikeRecipe,
        URL,
        userImage,
        setIsUserImageUploaded,
      }}
    >
      {!loading && children}
    </userContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(userContext);
};
