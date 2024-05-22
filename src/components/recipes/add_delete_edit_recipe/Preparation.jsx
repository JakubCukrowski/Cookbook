import { FieldArray, Formik, getIn } from "formik";
import {
  StyledRecipeForm,
  StyledTextarea,
} from "../../../assets/styles/FormStyles";
import {
  FormControl,
  Typography,
  IconButton,
  Box,
  FormHelperText,
} from "@mui/material";
import * as Yup from "yup";
import DeleteIcon from "@mui/icons-material/Delete";
import { OrangeButton } from "../../../assets/styles/Buttons";
import AddIcon from "@mui/icons-material/Add";

const Preparation = ({
  initialNewRecipeData,
  handleNextStep,
  handlePreviousStep,
}) => {
  return (
    <Formik
      initialValues={initialNewRecipeData}
      validationSchema={Yup.object().shape({
        preparationSteps: Yup.array().of(
          Yup.string().required("Krok nie może być pusty")
        ),
      })}
      onSubmit={(values) => handleNextStep(values)}
    >
      {(formik) => {
        return (
          <StyledRecipeForm onSubmit={formik.handleSubmit}>
            <Typography variant="h5">
              Powiedz jak przygotować Twoje danie
            </Typography>
            <FieldArray name="preparationSteps">
              {({ push, remove }) => (
                <>
                  {formik.values.preparationSteps.map(
                    (preparationStep, index) => {
                      const error = getIn(
                        formik.errors,
                        `preparationSteps.${index}`
                      );
                      const touched = getIn(
                        formik.touched,
                        `preparationSteps.${index}`
                      );

                      return (
                        <FormControl
                          key={index}
                          fullWidth
                          sx={{ position: "relative" }}
                        >
                          <label htmlFor={`preparationSteps.${index}`}>
                            Krok {index + 1}
                          </label>
                          <StyledTextarea
                            className={Boolean(touched && error) ? 'error' : null}
                            name={`preparationSteps.${index}`}
                            id={`preparationSteps.${index}`}
                            {...formik.getFieldProps(
                              `preparationSteps.${index}`
                            )}
                          />
                          {formik.values.preparationSteps.length > 1 && (
                              <IconButton
                                onClick={() => remove(index)}
                                sx={{ position: "absolute", right: 0, top: 0, padding: 0 }}
                              >
                                <DeleteIcon />
                              </IconButton>
                            )}
                          {Boolean(touched && error) && (
                            <FormHelperText error={Boolean(touched && error)}>
                              {formik.errors.preparationSteps[index]}
                            </FormHelperText>
                          )}
                        </FormControl>
                      );
                    }
                  )}
                  <Box sx={{ alignSelf: "flex-start" }}>
                    <OrangeButton onClick={() => push("")}>
                      <AddIcon /> Dodaj następny
                    </OrangeButton>
                  </Box>
                </>
              )}
            </FieldArray>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <OrangeButton onClick={() => handlePreviousStep(formik.values)}>
                Wróć
              </OrangeButton>
              <OrangeButton type="submit">Dalej</OrangeButton>
            </Box>
          </StyledRecipeForm>
        );
      }}
    </Formik>
  );
};

export default Preparation;
