/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import useAuth from './hooks/useAuth';
import { ConfigProvider, theme } from 'antd';
import {
  Home, Login, Profile, Register,
} from './pages';
import PrivateRoutes from './router/PrivateRoutes';
import ThemeContext from './contexts';

function App() {
  const [themeConfig, setThemeConfig] = useState({
    algorithm: theme.defaultAlgorithm, // Default algorithm
    components: {},
    token: {},
  });
  const [isDark, setIsDark] = useState(false);

  const changeAlgorithm = () => {
    setIsDark((prevState) => !prevState);
  };

  useEffect(() => {
    if (isDark) {
      setThemeConfig({
        algorithm: theme.darkAlgorithm, // Dark algorithm
        components: {},
        token: {},
      });
    } else {
      setThemeConfig({
        algorithm: theme.defaultAlgorithm, // Default algorithm
        components: {},
        token: {},
      });
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, changeAlgorithm }}>
      <ConfigProvider theme={themeConfig}>

        <Router>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route element={<Home />} path="/" index />
              <Route element={<Profile />} path="/profile" />
            </Route>
            {/* <Route element={<PublicRoutes />} path="/">

        </Route> */}
            {/* <Route element={<Profile />} path="/profile" />
            <Route element={<Home />} path="/" index /> */}
            <Route element={<Login />} index path="/login" />
            <Route element={<Register />} path="/register" />

            {/* <Route element={<Login />} path="/home" /> */}
          </Routes>
        </Router>

      </ConfigProvider>
    </ThemeContext.Provider>
  );
}

export default App;
