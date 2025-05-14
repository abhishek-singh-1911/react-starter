import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@reduxAndHooks/auth'; // Assuming you have an authentication hook

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiresAuth: boolean;
}

function ProtectedRoute({ children, requiresAuth }: ProtectedRouteProps) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (requiresAuth && !isAuthenticated) {
    // Redirect to the login page, passing the current location as state
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;