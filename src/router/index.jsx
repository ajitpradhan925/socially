import React from 'react';
import {
  createBrowserRouter,
} from 'react-router-dom';
import { Register, Login } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
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
