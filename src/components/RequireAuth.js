import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RequireAuth({ children }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth || !auth.isAuthenticated) {
    // Redirect to login, preserve location
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
