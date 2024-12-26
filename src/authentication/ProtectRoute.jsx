import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectRoute = ({ children }) => {
  const authUser = JSON.parse(localStorage.getItem('authUser'));

  return authUser ? children : <Navigate to="/login" />;
};

export default ProtectRoute;
