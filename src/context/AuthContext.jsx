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
} from "firebase/firestore";

const userContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null)
  const anonImage =
    "https://firebasestorage.googleapis.com/v0/b/przepisowa-pasja.appspot.com/o/profile%2Fanon-chef1.png?alt=media&token=f87cea4b-5659-4d0c-a951-7224c513e217";

  const [loading, setLoading] = useState(true);

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
          profilePhoto: anonImage,
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

  const signout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      const getUserData = async () => {
        const userRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userRef);
        setUserData({...userDoc.data(), id:user.uid})
      };

      getUserData();
    }
  }, [user]);

  return (
    <userContext.Provider
      value={{
        user,
        createUser,
        login,
        signout,
        userData
      }}
    >
      {!loading && children}
    </userContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(userContext);
};
