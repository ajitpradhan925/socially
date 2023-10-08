import { Button, theme } from 'antd';
import useToken from 'antd/es/theme/useToken';
import React from 'react';
import { InputField, PublicLayout } from './components';
// import useToken from 'antd/es/theme/useToken';

function App() {
  console.log({ theme });
  const token = useToken();

  console.log({ token: token[1].primary });
  return (
    <PublicLayout>
      <Button style={{ width: '30%', backgroundColor: token[1].primary }}>Primary Button</Button>
      <InputField placeholder="Enter your name" />
    </PublicLayout>
  );
}

export default App;
