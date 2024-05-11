import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { AuthForm } from "../components/AuthForm";

export const SignIn = () => {
  const { login } = UserAuth();
  const navigate = useNavigate();
  const [loggingIn, setLoggingIn] = useState(false);

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Musisz podać email";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Niepoprawny adres email";
    }

    if (!values.password) {
      errors.password = "Musisz podać hasło";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validate,
    onSubmit: async (values, { setErrors }) => {
      try {
        setLoggingIn(true);
        await login(values.email, values.password);
        navigate(-1);
      } catch (error) {
        setLoggingIn(false);
        if (error.code === "auth/invalid-credential") {
          setErrors({ loginStatus: "Niepoprawny email lub hasło" });
        }
        if (error.code === "auth/too-many-requests") {
          setErrors({ loginStatus: "Spróbuj ponownie później" });
        }
      }
    }
  });

  const inputs = [
    {
      inputErrors: (formik.touched.email && formik.errors.email),
      errorContent: formik.errors.email,
      id: "email",
      label: "Email",
      value: formik.values.email,
      name: "email",
      type: "email",
      inputFillError: (formik.touched.email && formik.errors.email) || formik.errors.loginStatus,
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
      inputFillError: (formik.touched.password && formik.errors.password) || formik.errors.loginStatus,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
    },
  ];

  return (
    <>
      <AuthForm
        title="Zaloguj się"
        accountExists="Nie masz konta?"
        linkTo="Utwórz konto"
        href="/signup"
        handleSubmit={formik.handleSubmit}
        signInComponent={true}
        inputs={inputs}
        loginStatus={formik.errors.loginStatus}
        loggingIn={loggingIn}
      />
    </>
  );
};
