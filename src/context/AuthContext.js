import {createContext, useContext, useEffect, useState} from 'react'

const userContext = createContext()

export const AuthContextProvider = ({children}) => {

    const [recipes, setRecipes] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const URL = 'https://food-api-7ukw.onrender.com/api/recipes'

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
        <userContext.Provider value={{recipes, isLoading}}>
            {children}
        </userContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(userContext)
}