import React from 'react';
// import useAuth from '../hooks/useAuth';
const LOCAL_STORAGE_KEY = 'authToken';
const { Navigate } = require('react-router-dom');

// eslint-disable-next-line react/prop-types
function PublicRoutes() {
  const storedToken = localStorage.getItem(LOCAL_STORAGE_KEY);
  return (
    storedToken ? <Navigate to="/" /> : <Navigate to="/login" />
  );
}

export default PublicRoutes;
