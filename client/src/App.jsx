import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import useAuth from './hooks/useAuth';
import {
  Home, Login, Profile, Register,
} from './pages';
import PrivateRoutes from './router/PrivateRoutes';
// import PublicRoutes from './router/PublicRoutes';
// import router from './router';
// import { InputField, PublicLayout } from './components';
// import useToken from 'antd/es/theme/useToken';

function App() {
  // const { isLoggedIn } = useAuth();

  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />} path="/">
          <Route element={<Home />} path="/" index />
          <Route element={<Profile />} path="/profile" />
        </Route>
        {/* <Route element={<PublicRoutes />} path="/">

        </Route> */}

        <Route element={<Login />} index path="/login" />
        <Route element={<Register />} path="/register" />

        {/* <Route element={<Login />} path="/home" /> */}
      </Routes>
    </Router>
  );
}

export default App;
