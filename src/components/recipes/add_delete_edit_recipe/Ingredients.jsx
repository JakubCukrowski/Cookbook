import { FieldArray, Formik, getIn } from "formik";
import { StyledRecipeForm } from "../../../assets/styles/FormStyles";
import {
  FormControl,
  TextField,
  Typography,
  IconButton,
  Box,
  FormHelperText,
} from "@mui/material";
import * as Yup from "yup";
import DeleteIcon from "@mui/icons-material/Delete";
import { OrangeButton } from "../../../assets/styles/Buttons";
import AddIcon from "@mui/icons-material/Add";

const Ingredients = ({
  initialNewRecipeData,
  handleNextStep,
  handlePreviousStep,
}) => {
  return (
    <Formik
      initialValues={initialNewRecipeData}
      validationSchema={Yup.object().shape({
        ingredients: Yup.array().of(
          Yup.string().required("Musisz podać składnik")
        ),
      })}
      onSubmit={(values) => {
        console.log(values);
        handleNextStep(values);
      }}
    >
      {(formik) => {
        return (
          <StyledRecipeForm onSubmit={formik.handleSubmit}>
            <Typography variant="h5">
              Zdradź innym potrzebne składniki
            </Typography>
            <FieldArray name="ingredients">
              {({ push, remove }) => (
                <>
                  {formik.values.ingredients.map((ingredient, index) => {
                    const error = getIn(formik.errors, `ingredients.${index}`);
                    const touched = getIn(
                      formik.touched,
                      `ingredients.${index}`
                    );

                    return (
                      <FormControl
                        sx={{ position: "relative" }}
                        key={index}
                        fullWidth
                      >
                        <TextField
                          size="small"
                          id={`ingredients.${index}`}
                          name={`ingredients.${index}`}
                          label="Składnik"
                          error={Boolean(error && touched)}
                          {...formik.getFieldProps(`ingredients.${index}`)}
                        />
                        {formik.values.ingredients.length > 1 && (
                          <IconButton
                            onClick={() => remove(index)}
                            sx={{ position: "absolute", right: 0 }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        )}
                        {Boolean(error && touched) && (
                          <FormHelperText error={Boolean(error && touched)}>
                            {formik.errors.ingredients[index]}
                          </FormHelperText>
                        )}
                      </FormControl>
                    );
                  })}
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
              <OrangeButton onClick={handlePreviousStep}>Wróć</OrangeButton>
              <OrangeButton type="submit">Dalej</OrangeButton>
            </Box>
          </StyledRecipeForm>
        );
      }}
    </Formik>
  );
};

export default Ingredients;
