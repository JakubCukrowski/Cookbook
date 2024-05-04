import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UpdatePhotoWrapper } from "../../assets/styles/DashboardStyles";

export const UpdateUserPhoto = ({ onChange }) => {
  return (
    <UpdatePhotoWrapper>
      <label className="add_pointer" htmlFor="addFile">
        <FontAwesomeIcon icon={faPen} color="white" />
      </label>
      <input
        type="file"
        onChange={onChange}
        id="addFile"
        className="recipe_image_input"
        accept="image/*"
      />
    </UpdatePhotoWrapper>
  );
};
