import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Hero } from "./components/Hero";
import { NewestRecipes } from "./components/recipes/main_page_recipes/NewestRecipes";
import { PopularRecipes } from "./components/recipes/main_page_recipes/PopularRecipes";
import SingleRecipe from "./pages/SingleRecipe";
import { AuthContextProvider } from "./context/AuthContext";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { Dashboard } from "./pages/Dashboard";
import { NotFound } from "./pages/NotFound";
import { RecipesPage } from "./pages/RecipesPage";
import { GlobalStyle } from "./assets/styles/GlobalStyles";
import { AddRecipe } from "./components/recipes/add_delete_edit_recipe/AddRecipe";
import { PrivateRoute } from "./components/PrivateRoute";
import { ProfanityViolation } from "./pages/ProfanityViolation";
import { Soups } from "./components/recipes/main_page_recipes/Soups";
import { Desserts } from "./components/recipes/main_page_recipes/Desserts";
import { FilterRecipes } from "./pages/FilterRecipes";
import { EditRecipe } from "./components/recipes/add_delete_edit_recipe/EditRecipe";
import { SearchedTag } from "./pages/SearchedTag";
import { MainDishes } from "./components/recipes/main_page_recipes/MainDishes";
import { BlockedRoute } from "./components/BlockedRoute";
import { PopularTags } from "./pages/PopularTags";
import { UserDetails} from "./pages/UserDetails";
import { RecipesContextProvider } from "./context/RecipesContext";

function App() {
  return (
    <AuthContextProvider>
      <RecipesContextProvider>
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
                    <MainDishes />
                    <Soups />
                    <Desserts />
                  </>
                }
              />
              <Route
                path="/category/:categoryName"
                element={<FilterRecipes />}
              />
              <Route path="/recipes/:recipeId" element={<SingleRecipe />} />
              <Route path="/search" element={<RecipesPage />} />
              <Route path="/show" element={<SearchedTag />} />
              <Route path="/violation" element={<ProfanityViolation />} />
              <Route path="/popular/:tagName" element={<PopularTags />} />
              <Route path="/:username" element={<UserDetails />}/>
              <Route element={<PrivateRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/add-recipe" element={<AddRecipe />} />
                <Route
                  path="/recipes/edit/:recipeId"
                  element={<EditRecipe />}
                />
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
            </Route>
            <Route element={<BlockedRoute />}>
              <Route path="/signup" element={<Layout />}>
                <Route index element={<SignUp />} />
              </Route>
              <Route path="/signin" element={<Layout />}>
                <Route index element={<SignIn />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </RecipesContextProvider>
    </AuthContextProvider>
  );
}

export default App;
