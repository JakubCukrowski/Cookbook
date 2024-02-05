import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Hero } from "./components/hero/Hero";
import { NewestRecipes } from "./components/recipes/NewestRecipes";
import { PopularRecipes } from "./components/recipes/PopularRecipes";
import { SingleRecipe } from "./components/recipes/SingleRecipe";
import { AuthContextProvider } from "./context/AuthContext";
import { SignUp } from "./components/user_credenitals/SignUp";
import { SignIn } from "./components/user_credenitals/SignIn";
import { Dashboard } from "./components/dashboard/Dashboard";
import { NotFound } from "./components/not_found/NotFound";
import { RecipesPage } from "./components/recipes/RecipesPage";
import { GlobalStyle } from "./styles/GlobalStyles";
import { AddRecipe } from "./components/recipes/AddRecipe";
import { PrivateRoute } from "./components/private_route/PrivateRoute";
import { ProfanityViolation } from "./components/profanity/ProfanityViolation";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <>
                  <Hero />
                  <NewestRecipes />
                  <PopularRecipes />
                </>
              }
            />
            <Route path="/recipes/:recipeId" element={<SingleRecipe />} />
            <Route path="/search" element={<RecipesPage />} />
            <Route path="/violation" element={<ProfanityViolation />}/>
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/add-recipe"
              element={
                <PrivateRoute>
                  <AddRecipe />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
