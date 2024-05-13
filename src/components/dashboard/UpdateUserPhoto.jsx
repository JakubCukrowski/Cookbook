import { UpdatePhotoWrapper } from "../../assets/styles/DashboardStyles";
import EditIcon from "@mui/icons-material/Edit";

export const UpdateUserPhoto = ({ onChange }) => {
  return (
    <UpdatePhotoWrapper>
      <label className="add_pointer" htmlFor="addFile">
        <EditIcon sx={{color: "white"}}/>
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
