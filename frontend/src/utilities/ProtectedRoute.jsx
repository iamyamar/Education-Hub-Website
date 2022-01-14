import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const isAuth = false;
const ProtectedRoute = () => {
  return !isAuth ? <Navigate to={"/"} /> : isAuth && !user.activated ? </Outlet>
};

export default ProtectedRoute;
