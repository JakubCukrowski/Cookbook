import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { AuthForm } from "../components/AuthForm";

export const SignUp = () => {
  const { createUser } = UserAuth();
  const navigate = useNavigate();
  const [loggingIn, setLoggingIn] = useState(false);

  const validate = (values) => {
    const errors = {};

    if (!values.displayName) {
      errors.displayName = "Musisz podać nazwę użytkownika";
    } else if (values.displayName.length < 4) {
      errors.displayName =
        "Nazwa użytkownika powinna posiadać przynajmniej 4 znaki";
    }

    if (!values.email) {
      errors.email = "Musisz podać email";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Email nie jest poprawny";
    }

    if (!values.password) {
      errors.password = "Musisz podać hasło";
    }

    if (values.password.length < 8) {
      errors.password = "Hasło musi mieć przynajmniej 8 znaków";
    }

    if (
      values.password.length >= 8 &&
      !values.password.match(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+,\-.={}[\]:;'"<>?|])/
      )
    ) {
      errors.password = "Hasło musi zawierać wielką literę i znak specjalny";
    }

    if (values.password !== values.repeatedPassword) {
      errors.paassword = "Hasła nie zgadzają się";
      errors.repeatedPassword = "Hasła nie zgadzają się";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      displayName: "",
      email: "",
      password: "",
      repeatedPassword: "",
    },
    validate,
    onSubmit: async (values) => {
      try {
        setLoggingIn(true);
        await createUser(values.displayName, values.email, values.password);
        navigate("/dashboard");
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          setLoggingIn(false);
          formik.errors.email = "Ten email jest już zajęty";
        }
      }
    },
  });

  const inputs = [
    {
      inputErrors: formik.touched.displayName && formik.errors.displayName,
      errorContent: formik.errors.displayName,
      id: "displayName",
      label: "Nazwa użytkownika",
      value: formik.values.displayName,
      name: "displayName",
      type: "text",
      inputFillError: formik.touched.displayName && formik.errors.displayName,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
    },
    {
      inputErrors: formik.touched.email && formik.errors.email,
      errorContent: formik.errors.email,
      id: "email",
      label: "Email",
      value: formik.values.email,
      name: "email",
      type: "email",
      inputFillError:
        (formik.touched.email && formik.errors.email) ||
        formik.errors.loginStatus,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
    },
    {
      inputErrors: formik.touched.password && formik.errors.password,
      errorContent: formik.errors.password,
      id: "password",
      label: "Hasło",
      value: formik.values.password,
      name: "password",
      type: "password",
      inputFillError: formik.touched.password && formik.errors.password,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
    },
    {
      inputErrors:
        formik.touched.repeatedPassword && formik.errors.repeatedPassword,
      errorContent: formik.errors.repeatedPassword,
      id: "repeatedPassword",
      label: "Hasło",
      value: formik.values.repeatedPassword,
      name: "repeatedPassword",
      type: "password",
      inputFillError:
        formik.touched.repeatedPassword && formik.errors.repeatedPassword,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
    },
  ];

  return (
    <AuthForm
      title="Zarejestruj się"
      accountExists="Masz już konto?"
      linkTo="Zaloguj się"
      href="/signin"
      handleSubmit={formik.handleSubmit}
      inputs={inputs}
      loggingIn={loggingIn}
    />
  );
};
