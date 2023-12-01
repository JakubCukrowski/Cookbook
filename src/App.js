import React, { useEffect, useState } from "react";
import { CustomNavbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { NewestRecipes } from "./components/NewestRecipes";
import 'bootstrap/dist/css/bootstrap.min.css';
import { PopularRecipes } from "./components/PopularRecipes";
import { Footer } from "./components/Footer";

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
    <>
      <CustomNavbar />
      <Hero />
      <NewestRecipes recipes={recipes}/>
      <PopularRecipes recipes={recipes}/>
      <Footer />
    </>
  )
}

export default App;
