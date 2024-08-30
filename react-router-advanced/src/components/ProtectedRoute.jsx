import React from 'react';
import { Navigate } from 'react-router-dom';

// Simulate authentication status
const useAuth = () => {
  // Replace with your actual authentication logic
  const isAuthenticated = true; // Change to false to test redirection
  return isAuthenticated;
};

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = useAuth();
  return isAuthenticated ? element : <Navigate to="/" />;
};

export default ProtectedRoute;