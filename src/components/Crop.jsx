import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { StyledCrop, CropWrapper } from "../assets/styles/CropStyles";
import {getCroppedImg} from "./CropImage";
import { Button } from "@mui/material";

export const Crop = ({ img, handleCloseCrop, updateImageFile }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  };

  const onCrop = async () => {
    const croppedImageUrl = await getCroppedImg(img, croppedAreaPixels)
    updateImageFile(croppedImageUrl)
    handleCloseCrop()
  }

  return (
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
      <Button variant="contained" sx={{position: "absolute", bottom: '5px', zIndex: 3000}} onClick={onCrop}>Zatwierdź</Button>
    </StyledCrop>
  );
};
