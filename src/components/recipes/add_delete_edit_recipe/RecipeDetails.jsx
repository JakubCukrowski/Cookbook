import React, { useEffect, useState } from "react";
import {
  TextField,
  Typography,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  FormHelperText,
} from "@mui/material";
import {
  StyledRecipeForm,
  StyledTextarea,
} from "../../../assets/styles/FormStyles";
import { OrangeButton } from "../../../assets/styles/Buttons";
import { Formik } from "formik";
import * as Yup from "yup";
import HandleImage from "./HandleImage";

const RecipeDetails = ({
  initialNewRecipeData,
  handleNextStep,
  imageName,
  updateImageName,
}) => {
  const [isImageAdded, setIsImageAdded] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const updateIsImageAdded = (bool) => {
    setIsImageAdded(bool);
  };

  const updateImagePreview = (file) => {
    setImagePreview(file);
  };

  useEffect(() => {
    if (initialNewRecipeData.image) {
  const updateNotImage = (bool) => {
    setNotImage(bool);
  };

  useEffect(() => {
    if (initialNewRecipeData.image.type) {
      setImagePreview(URL.createObjectURL(initialNewRecipeData.image));
    } else if (initialNewRecipeData.image.includes("firebase")) {
      setImagePreview(initialNewRecipeData.image);
    }
  }, []);

  return (
    <Formik
      initialValues={initialNewRecipeData}
      validationSchema={Yup.object({
        name: Yup.string().required("Musisz podać nazwę przepisu").trim(),
        preparationTime: Yup.mixed().required(
          "Musisz podać czas przygotowania"
        ),
        difficulty: Yup.string().required("Nie wybrałeś poziomu trudności"),
        category: Yup.string().required("Nie wybrałeś kategorii"),
        image: Yup.string().required("Dodaj zdjęcie"),
      })}
      onSubmit={(values) => {
        handleNextStep(values);
      }}
    >
      {(formik) => {
        return (
          <StyledRecipeForm>
            <Typography variant="h5">Powiedz nam więcej o przepisie</Typography>
            <FormControl
              fullWidth
              error={formik.errors.image && formik.touched.image}
            >
              <HandleImage
                updateIsImageAdded={updateIsImageAdded}
                updateImagePreview={updateImagePreview}
                isImageAdded={isImageAdded}
                imagePreview={imagePreview}
                setFieldValue={formik.setFieldValue}
                setFieldError={formik.setFieldError}
                setFieldTouched={formik.setFieldTouched}
                errors={formik.errors.image && formik.touched.image}
              />
              {formik.errors.image && formik.touched.image && (
                <FormHelperText>{formik.errors.image}</FormHelperText>
              )}
            </FormControl>
            <FormControl
              fullWidth
              error={formik.errors.name && formik.touched.name}
            >
              <TextField
                size="small"
                id="name"
                name="name"
                label="Nazwa przepisu"
                error={formik.errors.name && formik.touched.name}
                {...formik.getFieldProps("name")}
              />
              {formik.errors.name && formik.touched.name && (
                <FormHelperText>{formik.errors.name}</FormHelperText>
              )}
            </FormControl>
            <FormControl
              size="small"
              fullWidth
              error={
                formik.errors.preparationTime && formik.touched.preparationTime
              }
            >
              <InputLabel id="preparation-time-label">
                Czas przygotowania
              </InputLabel>
              <Select
                labelId="preparation-time-label"
                id="preparationTime"
                label="Czas przygotowania"
                name="preparationTime"
                {...formik.getFieldProps("preparationTime")}
              >
                <MenuItem value={30}>Około 30 minut</MenuItem>
                <MenuItem value={60}>Około 60 minut</MenuItem>
                <MenuItem value={90}>Około 90 minut</MenuItem>
                <MenuItem value={"90_and_more"}>90 minut i więcej</MenuItem>
              </Select>
              {formik.errors.preparationTime &&
                formik.touched.preparationTime && (
                  <FormHelperText>
                    {formik.errors.preparationTime}
                  </FormHelperText>
                )}
            </FormControl>
            <FormControl
              size="small"
              fullWidth
              error={formik.errors.difficulty && formik.touched.difficulty}
            >
              <InputLabel id="difficulty-level-label">
                Stopień trudności
              </InputLabel>
              <Select
                labelId="difficulty-level-label"
                id="difficulty"
                name="difficulty"
                label="Stopień trudności"
                {...formik.getFieldProps("difficulty")}
              >
                <MenuItem value="easy">Łatwy</MenuItem>
                <MenuItem value="medium">Średni</MenuItem>
                <MenuItem value="hard">Trudny</MenuItem>
              </Select>
              {formik.errors.difficulty && formik.touched.difficulty && (
                <FormHelperText>{formik.errors.difficulty}</FormHelperText>
              )}
            </FormControl>
            <FormControl
              size="small"
              fullWidth
              error={formik.errors.category && formik.touched.category}
            >
              <InputLabel id="category-label">Wybierz kategorię</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                label="Wybierz kategorię"
                name="category"
                {...formik.getFieldProps("category")}
              >
                <MenuItem value="main_dishes">Dania główne</MenuItem>
                <MenuItem value="soups">Zupy</MenuItem>
                <MenuItem value="breakfasts">Śniadania</MenuItem>
                <MenuItem value="suppers">Kolacje</MenuItem>
                <MenuItem value="snacks">Przekąski</MenuItem>
                <MenuItem value="desserts">Desery</MenuItem>
                <MenuItem value="beverages">Napoje</MenuItem>
              </Select>
              {formik.errors.category && formik.touched.category && (
                <FormHelperText>{formik.errors.category}</FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth>
              <label htmlFor="about_recipe" style={{ fontSize: 14 }}>
                O przepisie (opcjonalnie)
              </label>
              <StyledTextarea
                id="description"
                name="description"
                {...formik.getFieldProps("description")}
              />
            </FormControl>
            <OrangeButton type="submit" style={{ alignSelf: "flex-end" }}>
              Dalej
            </OrangeButton>
          </StyledRecipeForm>
        );
      }}
    </Formik>
  );
};

export default RecipeDetails;
