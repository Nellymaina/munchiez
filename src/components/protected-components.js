import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./auth";

export default function ProtectedRoute({ children }) {
  const { auth } = useContext(AuthContext);

  if (!auth) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}

