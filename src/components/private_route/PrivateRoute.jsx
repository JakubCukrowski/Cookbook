import React, { useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return children;
};
