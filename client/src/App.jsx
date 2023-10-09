import { theme } from 'antd';
import useToken from 'antd/es/theme/useToken';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
// import { InputField, PublicLayout } from './components';
// import useToken from 'antd/es/theme/useToken';

function App() {
  console.log({ theme });
  const token = useToken();

  console.log({ token: token[1].primary });
  return (
    <RouterProvider router={router} />
  );
}

export default App;
