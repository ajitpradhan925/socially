import React from 'react';
import { LOCAL_STORAGE_KEY } from '../config';

const { Outlet, Navigate } = require('react-router-dom');

// eslint-disable-next-line react/prop-types
function PrivateRoutes() {
  const storedToken = localStorage.getItem(LOCAL_STORAGE_KEY);
  return (
    storedToken ? (<Outlet />) : <Navigate to="/login" />
  );
}

export default PrivateRoutes;
