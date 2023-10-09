import React from 'react';
// import useAuth from '../hooks/useAuth';
const LOCAL_STORAGE_KEY = 'authToken';
const { Outlet, Navigate } = require('react-router-dom');

// eslint-disable-next-line react/prop-types
function PrivateRoutes() {
  // console.log({ isLoggedIn });
  const storedToken = localStorage.getItem(LOCAL_STORAGE_KEY);
  // console.log({ isLoggedIn123: token });
  return (
    storedToken ? (<Outlet />) : <Navigate to="/login" />
  );
}

export default PrivateRoutes;
