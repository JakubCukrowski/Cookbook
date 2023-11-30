import { CustomNavbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { NewestRecipes } from "./components/NewestRecipes/NewestRecipes";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <CustomNavbar />
      <Hero />
      <NewestRecipes />
    </>
  )
}

export default App;
