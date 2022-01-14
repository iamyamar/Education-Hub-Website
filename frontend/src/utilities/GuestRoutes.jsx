import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const isAuth = false;
const GuestRoutes = () => {
  return isAuth ? <Navigate to={"/rooms"} /> : <Outlet />;
};

export default GuestRoutes;
