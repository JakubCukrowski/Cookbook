import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
import {NewestRecipes} from './components/NewestRecipes'
import {PopularRecipes} from './components/PopularRecipes'
import { SingleRecipe } from "./components/SingleRecipe";

function App() {

  const [recipes, setRecipes] = useState([])
    const URL = 'https://food-api-7ukw.onrender.com/api/recipes'

    useEffect(() => {
        const fetchRecipes = async () => {
          await fetch(URL)
            .then(response => response.json())
            .then(response => setRecipes(response))
            .catch(err => console.log(err))
        }

        fetchRecipes()
    }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
          <>
            <Hero recipes={recipes}/>
            <NewestRecipes recipes={recipes}/>
            <PopularRecipes recipes={recipes} />
          </>}/>
          <Route path="/recipes/:recipeId" element={<SingleRecipe recipes={recipes} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
