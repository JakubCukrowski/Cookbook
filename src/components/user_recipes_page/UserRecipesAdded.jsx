import { useNavigate } from "react-router-dom";
import UserRecipesStructure from "./UserRecipesStructure";

const UserRecipesAdded = ({ userRecipes }) => {
  const navigate = useNavigate();
  return (
    <>
      <UserRecipesStructure
        title={`Dodane przepisy (${userRecipes.length})`}
        array={userRecipes}
        emptyMessage="Użytkownik nie dodał jeszcze żadnego przepisu."
      />
    </>
  );
};

export default UserRecipesAdded;
