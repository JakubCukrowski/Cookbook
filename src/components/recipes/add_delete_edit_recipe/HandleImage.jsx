import React, { useCallback } from "react";
import { Box, Typography } from "@mui/material";
import { StyledInputLabel } from "../../../assets/styles/FormStyles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useDropzone } from "react-dropzone";
import { Crop } from "../../Crop";
import { OrangeButton } from "../../../assets/styles/Buttons";

const HandleImage = ({
  errors,
  setFieldValue,
  updateIsImageAdded,
  updateImagePreview,
  isImageAdded,
  imagePreview,
}) => {

  const onDrop = useCallback((acceptedFiles) => {
    updateImagePreview(URL.createObjectURL(acceptedFiles[0]));
    updateIsImageAdded(true);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".png"],
    },
  });

  const handleCloseCrop = () => {
    updateIsImageAdded(false);
    setFieldValue("image", imagePreview);
  };

  return (
    <>
      {!isImageAdded && !imagePreview && (
        <Box
          sx={{
            border: errors
              ? "2px dashed tomato"
              : "2px dashed rgba(0, 0, 0, 0.3)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
            gap: "20px",
          }}
          {...getRootProps()}
        >
          <Box sx={{ textAlign: "center" }}>
            <CloudUploadIcon sx={{ fontSize: 50 }} />
            <Typography>Upuść zdjęcie</Typography>
          </Box>
          <Typography>Lub</Typography>
          <StyledInputLabel htmlFor="file_drop">Prześlij</StyledInputLabel>
          <input
            {...getInputProps()}
            style={{ display: "none" }}
            name="image"
          />
        </Box>
      )}
      {!isImageAdded && imagePreview && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <Typography>Podgląd zdjęcia</Typography>
          <Box
            sx={{
              maxWidth: "400px",
              maxHeight: "300px",
              overflow: "hidden",
              borderRadius: "8px",
            }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={imagePreview}
              alt="podglad"
            />
          </Box>
          <OrangeButton
            onClick={() => {
              updateImagePreview(null);
              setFieldValue("image", "");
            }}
          >
            Zmień
          </OrangeButton>
        </Box>
      )}
      {isImageAdded && imagePreview && (
        <Crop
          img={imagePreview}
          handleCloseCrop={handleCloseCrop}
          updateImagePreview={updateImagePreview}
        ></Crop>
      )}
    </>
  );
};

export default HandleImage;
