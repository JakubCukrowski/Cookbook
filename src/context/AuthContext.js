import {createContext, useContext, useEffect, useState} from 'react'
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged, 
    updateProfile} 
from "firebase/auth";
import { auth } from '../firebase';


const userContext = createContext()

export const AuthContextProvider = ({children}) => {
    //fake recipes for awaiting api response (api goes to sleep after inactive)
    const [recipes, setRecipes] = useState(['recipe1', 'recipe2', 'recipe3', 'recipe4'])
    const [isLoading, setIsLoading] = useState(true)
    const URL = 'https://food-api-7ukw.onrender.com/api/recipes'
    const [user, setUser] = useState(null)

    const createUser = (displayName, email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                updateProfile(userCredentials.user, {
                    displayName: displayName 
                })
            })
            .catch(error => console.log(error)) 
    }

    const signout = () => {
        return signOut(auth)
    }

    //fetching recipes and logging in
    useEffect(() => {
        const fetchRecipes = async () => {
          await fetch(URL)
            .then(response => response.json())
            .then(response => {
                setRecipes(response)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
        }

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        fetchRecipes()
        return () => unsubscribe()
    }, [])

    return (
        <userContext.Provider value={{recipes, isLoading, user, createUser, signout}}>
            {children}
        </userContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(userContext)
}