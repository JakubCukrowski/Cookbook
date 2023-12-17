import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
import {NewestRecipes} from './components/NewestRecipes'
import {PopularRecipes} from './components/PopularRecipes'
import { SingleRecipe } from "./components/SingleRecipe";
import { AuthContextProvider } from "./context/AuthContext";
import { SignUp } from "./components/SignUp";
import { SignIn } from "./components/SignIn";

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
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App;
