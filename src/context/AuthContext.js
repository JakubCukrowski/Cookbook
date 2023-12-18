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
    const [isLoading, setIsLoading] = useState(false)
    const URL = 'https://food-api-7ukw.onrender.com/api/recipes'

    const createUser = (displayName, email, password) => {
        const create = createUserWithEmailAndPassword(auth, email, password)
        return updateProfile(auth.currentUser, {
            displayName: displayName
        })
    }

    useEffect(() => {
        const fetchRecipes = async () => {
          await fetch(URL)
            .then(response => response.json())
            .then(response => {
                setRecipes(response)
                setIsLoading(true)
            })
            .catch(err => console.log(err))
        }

        fetchRecipes()
    }, [])

    return (
        <userContext.Provider value={{recipes, isLoading, createUser}}>
            {children}
        </userContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(userContext)
}