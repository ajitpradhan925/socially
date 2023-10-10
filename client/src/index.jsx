/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ConfigProvider, theme } from 'antd';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContext from './contexts';

const root = ReactDOM.createRoot(document.getElementById('root'));

function MainApp() {
  // Initialize the theme configuration in state
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
    <ConfigProvider theme={themeConfig}>
      <React.StrictMode>
        <ThemeContext.Provider value={{ isDark, changeAlgorithm }}>
          <App />
        </ThemeContext.Provider>

        {' '}
        {/* Pass the changeAlgorithm function as a prop */}
      </React.StrictMode>
    </ConfigProvider>
  );
}

root.render(<MainApp />);

reportWebVitals();
