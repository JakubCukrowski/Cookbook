import { Formik, FieldArray } from "formik";
import { StyledRecipeForm } from "../../../assets/styles/FormStyles";
import * as Yup from "yup";
import { OrangeButton } from "../../../assets/styles/Buttons";
import {
  FormControlLabel,
  Checkbox,
  Typography,
  Box,
  Grid,
} from "@mui/material";

const Tags = ({
  initialNewRecipeData,
  handlePreviousStep,
  submitForm,
}) => {
  const tags = [
    "kuchnia polska",
    "dania główne",
    "kurczak",
    "wołowina",
    "śniadania",
    "kolacje",
    "ryba",
    "gulasz",
    "kuchnia węgierska",
    "kuchnia chińska",
    "przekąski",
    "napoje",
    "burgery",
    "zupy",
    "desery",
    "indyk",
    "makarony",
    "kuchnia amerykańska",
    "kuchnia włoska",
    "kuchnia gruzińska",
    "kuchnia angielska",
    "owoce morza",
    "kuchnia tradycyjna",
    "kuchnia meksykańska",
    "kuchnia indyjska",
    "okazje",
  ];
  return (
    <Formik
      initialValues={initialNewRecipeData}
      validationSchema={Yup.object().shape({
        tags: Yup.array().of(Yup.string()),
      })}
      onSubmit={() => submitForm()}
    >
      {(formik) => {
        return (
          <StyledRecipeForm onSubmit={formik.handleSubmit}>
            <Typography variant="h5">Możesz otagować swój przepis</Typography>
            <Typography>
              Tagując przepis pozwolisz innym użytkownikom ławiej go znaleźć{" "}
              <br /> (Nie jest to obowiązkowe)
            </Typography>
            <FieldArray name="tags">
              {({ push, remove }) => (
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  {tags.map((tag, index) => (
                    <Grid
                      textAlign={"start"}
                      item
                      xs={2}
                      sm={4}
                      md={4}
                      key={index}
                    >
                      <FormControlLabel
                        onChange={() =>
                          !formik.values.tags.includes(tag)
                            ? push(tag)
                            : remove(index)
                        }
                        value={tag}
                        control={<Checkbox name={`tags.${index}`} />}
                        label={tag}
                        labelPlacement="end"
                      />
                    </Grid>
                  ))}
                </Grid>
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

export default Tags;
