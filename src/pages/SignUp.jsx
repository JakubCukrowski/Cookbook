import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  StyledForm,
  StyledSignSection,
  StyledTextField,
} from "../assets/styles/CredentialsStyles";
import bckImg from "../assets/images/signForm2.jpg";
import CircularProgressPage from "./CircularProgressPage";
import { Container } from "@mui/system";
import { FormControl, FormHelperText, Typography } from "@mui/material";
import { StyledLink } from "../assets/styles/StyledLink";
import { ConfirmButton } from "../assets/styles/Buttons";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { normalizedString } from "../helpers/helpers";

export const SignUp = () => {
  const { createUser } = UserAuth();
  const navigate = useNavigate();
  const [loggingIn, setLoggingIn] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          displayName: "",
          email: "",
          password: "",
          repeatedPassword: "",
        }}
        validationSchema={Yup.object({
          displayName: Yup.string()
            .required("Podaj nazwę użytkownika")
            .min(3, "Nazwa użytkownika musi posiadać przynajmniej 3 znaki")
            .max(15, "Nazwa użytkownika może posiadać maksymalnie 15 znaków.")
            .test(
              "username-exists",
              "Ta nazwa użytkownika jest już zajęta",
              async (value) => {
                const usersRef = collection(db, "users");
                const q = query(
                  usersRef,
                  where(
                    "normalizedName",
                    "==",
                    normalizedString(value).toLowerCase()
                  )
                );
                const querySnapshot = await getDocs(q);
                return querySnapshot.empty;
              }
            ),
          email: Yup.string()
            .required("Musisz podać email")
            .email("Ten adres email nie jest poprawny"),
          password: Yup.string()
            .required("Podaj hasło")
            .min(6, "Hasło musi posiadać 6 lub więcej znaków")
            .matches(
              /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+,\-.={}[\]:;'"<>?|])/,
              "Hasło musi zawierać wielką literę i znak specjalny."
            ),
          repeatedPassword: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Hasła nie zgadzają się."
          ),
        })}
        onSubmit={async (values, { setFieldError }) => {
          try {
            setLoggingIn(true);
            await createUser(values.displayName, values.email, values.password);
            navigate("/dashboard");
          } catch (error) {
            if (error.code === "auth/email-already-in-use") {
              setLoggingIn(false);
              setFieldError("email", "Ten email jest już zajęty");
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
                  <Typography variant="h4">Zarejestruj się</Typography>
                  <Typography>
                    Masz już konto?{" "}
                    <StyledLink to={"/signin"}>Zaloguj się</StyledLink>
                  </Typography>
                  {formik.errors.accountExists ? (
                    <FormHelperText error>
                      {formik.errors.accountExists}
                    </FormHelperText>
                  ) : null}
                  <FormControl
                    fullWidth
                    error={
                      formik.errors.displayName && formik.touched.displayName
                    }
                  >
                    <StyledTextField
                      label="Nazwa użytkownika"
                      id="displayName"
                      name="displayName"
                      type="text"
                      autoComplete="one-time-code"
                      error={
                        formik.errors.displayName && formik.touched.displayName
                      }
                      helperText={
                        formik.errors.displayName && formik.touched.displayName
                          ? formik.errors.displayName
                          : null
                      }
                      {...formik.getFieldProps("displayName")}
                    />
                  </FormControl>
                  <FormControl
                    fullWidth
                    error={formik.errors.email && formik.touched.email}
                  >
                    <StyledTextField
                      label="Email"
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="one-time-code"
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
                      autoComplete="one-time-code"
                      error={formik.errors.password && formik.touched.password}
                      helperText={
                        formik.errors.password && formik.touched.password
                          ? formik.errors.password
                          : null
                      }
                      {...formik.getFieldProps("password")}
                    />
                  </FormControl>
                  <FormControl
                    fullWidth
                    error={
                      formik.errors.repeatedPassword &&
                      formik.touched.repeatedPassword
                    }
                  >
                    <StyledTextField
                      label="Powtórz hasło"
                      id="repeatedPassword"
                      name="repeatedPassword"
                      type="password"
                      autoComplete="one-time-code"
                      error={
                        formik.errors.repeatedPassword &&
                        formik.touched.repeatedPassword
                      }
                      helperText={
                        formik.errors.repeatedPassword &&
                        formik.touched.repeatedPassword
                          ? formik.errors.repeatedPassword
                          : null
                      }
                      {...formik.getFieldProps("repeatedPassword")}
                    />
                  </FormControl>
                  <ConfirmButton variant="contained" type="submit">
                    Zarejestruj
                  </ConfirmButton>
                </StyledForm>
              </Container>
            )}
          </StyledSignSection>
        )}
      </Formik>
    </>
  );
};
