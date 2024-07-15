import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { Container } from "@mui/system";
import {
  StyledForm,
  StyledSignSection,
  StyledTextField,
} from "../assets/styles/CredentialsStyles";
import bckImg from "../assets/images/signForm2.jpg";
import { Box, FormControl, FormHelperText, Typography } from "@mui/material";
import { StyledLink } from "../assets/styles/StyledLink";
import { ConfirmButton } from "../assets/styles/Buttons";
import CircularProgressPage from "./CircularProgressPage";

export const SignIn = () => {
  const { login } = UserAuth();
  const navigate = useNavigate();
  const [loggingIn, setLoggingIn] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          accountExists: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Niepoprawny adres email")
            .required("Musisz podać email"),
          password: Yup.string().required("Musisz podać hasło"),
        })}
        onSubmit={async (values, { setFieldError }) => {
          try {
            setLoggingIn(true);
            await login(values.email, values.password);
            navigate(-1);
            // if (saveEmail) localStorage.setItem("email", formik.values.email);
          } catch (error) {
            setLoggingIn(false);
            if (error.code === "auth/invalid-credential") {
              setFieldError("accountExists", "Niepoprawny email lub hasło");
            }
            if (error.code === "auth/too-many-requests") {
              setFieldError(
                "accountExists",
                "Zbyt wiele nieudanych prób. Spróbuj ponownie później."
              );
            }
          }
        }}
      >
        {(formik) => (
          <StyledSignSection backgroundimage={bckImg}>
            {loggingIn ? (
              <CircularProgressPage />
            ) : (
              <Container sx={{ zIndex: 200 }}>
                <StyledForm onSubmit={formik.handleSubmit} noValidate>
                  <Typography variant="h4">Zaloguj się</Typography>
                  <Typography>
                    Nie masz konta?{" "}
                    <StyledLink to={"/signup"}>Zarejestruj się</StyledLink>
                  </Typography>
                  {formik.errors.accountExists ? (
                    <FormHelperText error>
                      {formik.errors.accountExists}
                    </FormHelperText>
                  ) : null}
                  <FormControl
                    fullWidth
                    error={formik.errors.email && formik.touched.email}
                  >
                    <StyledTextField
                      label="Email"
                      id="email"
                      name="email"
                      type="email"
                      error={
                        (formik.errors.email && formik.touched.email) ||
                        formik.errors.accountExists
                      }
                      helperText={
                        formik.errors.email && formik.touched.email
                          ? formik.errors.email
                          : null
                      }
                      {...formik.getFieldProps("email")}
                    />
                  </FormControl>
                  <FormControl
                    fullWidth
                    error={formik.errors.password && formik.touched.password}
                  >
                    <StyledTextField
                      label="Hasło"
                      id="password"
                      name="password"
                      type="password"
                      error={
                        (formik.errors.password && formik.touched.password) ||
                        formik.errors.accountExists
                      }
                      helperText={
                        formik.errors.password && formik.touched.password
                          ? formik.errors.password
                          : null
                      }
                      {...formik.getFieldProps("password")}
                    />
                  </FormControl>
                  <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: "center"}}>
                    <ConfirmButton variant="contained" type="submit">
                      Zaloguj
                    </ConfirmButton>
                    <ConfirmButton
                      variant="contained"
                      type="button"
                      onClick={async () => {
                        setLoggingIn(true);
                        await login("test@test.com", "123456");
                        navigate(-1);
                      }}
                    >
                      konto demo
                    </ConfirmButton>
                  </Box>
                </StyledForm>
              </Container>
            )}
          </StyledSignSection>
        )}
      </Formik>
    </>
  );
};
