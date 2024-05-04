import { Navigate, Outlet } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
export const PrivateRoute = () => {
  const {user} = UserAuth()
  return user ? <Outlet /> : <Navigate to="/signin" />;
};
