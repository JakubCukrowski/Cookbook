import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Hero } from "./components/hero/Hero";
import { NewestRecipes } from "./components/recipes/main_page_recipes/NewestRecipes";
import { PopularRecipes } from "./components/recipes/main_page_recipes/PopularRecipes";
import { SingleRecipe } from "./components/recipes/singe_recipe/SingleRecipe";
import { AuthContextProvider } from "./context/AuthContext";
import { SignUp } from "./components/user_credenitals/SignUp";
import { SignIn } from "./components/user_credenitals/SignIn";
import { Dashboard } from "./components/dashboard/Dashboard";
import { NotFound } from "./components/not_found/NotFound";
import { RecipesPage } from "./components/recipes/RecipesPage";
import { GlobalStyle } from "./styles/GlobalStyles";
import { AddRecipe } from "./components/recipes/add_delete_edit_recipe/AddRecipe";
import { PrivateRoute } from "./components/private_route/PrivateRoute";
import { ProfanityViolation } from "./components/profanity/ProfanityViolation";
import { Soups } from "./components/recipes/main_page_recipes/Soups";
import { Desserts } from "./components/recipes/main_page_recipes/Desserts";
import { FilterRecipes } from "./components/recipes/FilterRecipes";
import { EditRecipe } from "./components/recipes/add_delete_edit_recipe/EditRecipe";
import { ScrollToTop } from "./components/ScrollToTop";
import { SearchedTag } from "./components/recipes/Tags/SearchedTag";
import { MainDishes } from "./components/recipes/main_page_recipes/MainDishes";
import { BlockedRoute } from "./components/blocked_route/BlockedRoute";
import { PopularTags } from "./components/recipes/Tags/PopularTags";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <GlobalStyle />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <>
                  <Hero />
                  <NewestRecipes />
                  <PopularRecipes />
                  <MainDishes />
                  <Soups />
                  <Desserts />
                </>
              }
            />
            <Route path="/category/:categoryName" element={<FilterRecipes />} />
            <Route path="/recipes/:recipeId" element={<SingleRecipe />} />
            <Route path="/search" element={<RecipesPage />} />
            <Route path="/show" element={<SearchedTag />} />
            <Route path="/violation" element={<ProfanityViolation />} />
            <Route path="/popular/:tagName" element={<PopularTags />}/>
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/add-recipe" element={<AddRecipe />} />
              <Route path="/recipes/edit/:recipeId" element={<EditRecipe />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Route>
          <Route element={<BlockedRoute />}>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
