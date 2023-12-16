import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
import {NewestRecipes} from './components/NewestRecipes'
import {PopularRecipes} from './components/PopularRecipes'
import { SingleRecipe } from "./components/SingleRecipe";
import { AuthContextProvider } from "./context/AuthContext";

function App() {

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={
            <>
              <Hero />
              <NewestRecipes />
              <PopularRecipes />
            </>}/>
            <Route path="/recipes/:recipeId" element={<SingleRecipe />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App;
