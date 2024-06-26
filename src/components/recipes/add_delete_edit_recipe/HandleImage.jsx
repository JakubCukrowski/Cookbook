import React, { useCallback, useState } from "react";
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
  handleImageChange,
  setFieldError,
  setFieldTouched,
}) => {
  const acceptedFileFormats = [
    "image/jpeg",
    "image/svg",
    "image/png",
    "image/jpg",
  ];

  const [imageName, setImageName] = useState(null) 
  const onDrop = useCallback((acceptedFiles) => {
    try {
      if (acceptedFileFormats.includes(acceptedFiles[0].type)) {
        setFieldError("image", "");
        setFieldTouched("image", false);
        updateImagePreview(acceptedFiles[0]);
        updateIsImageAdded(true);
        setImageName(acceptedFiles[0].name)
      }
    } catch (error) {
      setFieldError("image", "Dodany plik ma niewłaściwy format");
      setFieldTouched("image", true, false);
    }
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".png"],
    },
  });

  const handleCloseCrop = () => {
    updateIsImageAdded(false);
  };

  const handleCancelCrop = () => {
    updateIsImageAdded(false)
    setImageName(null)
    updateImagePreview(null)
  }

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
          <StyledInputLabel>Prześlij</StyledInputLabel>
          <input
            {...getInputProps({
              name: "image",
              onChange: (event) => {
                const dropzoneProps = getInputProps();
                dropzoneProps.onChange(event);
                handleImageChange(event);
              },
            })}
            style={{ display: "none" }}
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
          handleCancelCrop={handleCancelCrop}
          imageName={imageName}
          setFieldValue={setFieldValue}
          img={URL.createObjectURL(imagePreview)}
          handleCloseCrop={handleCloseCrop}
          updateImagePreview={updateImagePreview}
        ></Crop>
      )}
    </>
  );
};

export default HandleImage;
