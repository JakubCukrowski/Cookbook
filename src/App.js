import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Hero } from "./components/hero/Hero";
import {NewestRecipes} from './components/recipes/NewestRecipes'
import {PopularRecipes} from './components/recipes/PopularRecipes'
import { SingleRecipe } from "./components/recipes/SingleRecipe";
import { AuthContextProvider } from "./context/AuthContext";
import { SignUp } from "./components/user_credenitals/SignUp";
import { SignIn } from "./components/user_credenitals/SignIn";
import { Dashboard } from "./components/dashboard/Dashboard";
import { NotFound } from "./components/not_found/NotFound";
import { NewestRecipesPage } from "./components/recipes/NewestRecipesPage";
import { GlobalStyle } from "./styles/GlobalStyles";
import { AddRecipe } from "./components/recipes/AddRecipe";

function App() {

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={
            <>
              <Hero />
              <NewestRecipes />
              <PopularRecipes />
            </>}/>
            <Route path="/recipes/:recipeId" element={<SingleRecipe />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-recipe" element={<AddRecipe />}/>
            <Route path="/newest-recipes" element={<NewestRecipesPage />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App;
