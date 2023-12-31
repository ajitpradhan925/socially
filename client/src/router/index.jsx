import React from 'react';
import {
  createBrowserRouter,
} from 'react-router-dom';
import { Register, Login, Home } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'register',
    element: <Register />,
  },
]);

export default router;
