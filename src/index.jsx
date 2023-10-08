import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ConfigProvider, theme } from 'antd';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { antTheme } from './config/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider
    theme={{
      algorithm: theme.darkAlgorithm,
      components: {
        Layout: {
          colorBgBase: '#f00',
        },
        Button: {
          colorPrimary: '#fff',
        },
      },
      token: {
        primary: '#121212',
        secondary: '#2C2D2E',
      },
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ConfigProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
