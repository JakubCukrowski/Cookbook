import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { StyledCrop, CropWrapper } from "../assets/styles/CropStyles";
import { getCroppedImg } from "./CropImage";
import { Box, Button, Slider, Typography } from "@mui/material";
import { OrangeButton } from "../assets/styles/Buttons";

export const Crop = ({
  img,
  handleCloseCrop,
  updateImagePreview,
  setFieldValue,
  imageName,
  handleCancelCrop,
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const onZoomChange = (zoom) => setZoom(zoom);

  const onCrop = async () => {
    const croppedImageUrl = await getCroppedImg(img, croppedAreaPixels);
    updateImagePreview(croppedImageUrl);
    fetch(croppedImageUrl)
      .then((res) => res.blob())
      .then((blob) => {
        setFieldValue(
          "image",
          new File([blob], imageName, { type: "image/jpeg" })
        );
      });
    handleCloseCrop();
  };

  return (
    <>
      <StyledCrop>
        <CropWrapper>
          <Cropper
            image={img}
            crop={crop}
            zoom={zoom}
            aspect={4 / 3}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        </CropWrapper>
        <Box sx={{ position: "fixed", bottom: "25%" }}>
          <Box sx={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            <OrangeButton variant="contained" onClick={onCrop}>
              Zatwierdź
            </OrangeButton>
            <OrangeButton variant="contained" onClick={handleCancelCrop}>
              Anuluj
            </OrangeButton>
          </Box>
          <Typography textAlign="center" color="white">
            Przybliż
          </Typography>
          <Slider
            sx={{ color: "#e19f25" }}
            min={1}
            max={3}
            step={0.05}
            value={zoom}
            onChange={(e) => onZoomChange(e.target.value)}
          />
        </Box>
      </StyledCrop>
    </>
  );
};
