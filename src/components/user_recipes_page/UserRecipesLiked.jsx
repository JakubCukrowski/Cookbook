import { useNavigate } from "react-router-dom";
import UserRecipesStructure from "./UserRecipesStructure";

const UserRecipesLiked = ({ likedByUser }) => {
  const navigate = useNavigate();

  return (
    <>
      <UserRecipesStructure
        title="Polubione przepisy"
        array={likedByUser}
        emptyMessage="Użytkownik nie polubił żadnego przepisu."
      />
    </>
  );
};

export default UserRecipesLiked;
