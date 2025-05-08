import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn'); // Check if the user is logged in

  if (!isLoggedIn) {
    // If not logged in, redirect to login page
    return <Navigate to="/admin-login" />;
  }

  return children; // If logged in, render the requested page (AdminDashboard)
};

export default ProtectedRoute;
