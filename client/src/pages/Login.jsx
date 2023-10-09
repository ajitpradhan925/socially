import {
  Form, Row, Typography,
} from 'antd';
import React from 'react';
import useToken from 'antd/es/theme/useToken';
import { Link } from 'react-router-dom';
import { InputField, PublicLayout, CustomButton } from '../components';
import loginIllustration from '../assets/login_illustration.svg';

const { Text, Title } = Typography;

export default function Login() {
  const token = useToken();
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <PublicLayout>
      <Row style={{ flexDirection: 'column' }} align="middle">

        <img src={loginIllustration} alt="Login Illustration" style={{ width: '170px', height: '130px' }} />
        <Title level={3}>Welcome Back</Title>
        <Text>Let’s join us :)</Text>
      </Row>
      <Row justify="center" style={{ marginTop: '2%', flexDirection: 'column' }} align="middle">
        <Form
          name="login"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          style={{ width: '40%' }}
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <InputField placeholder="Enter email..." name="email" label="Email" showLabel="true" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <InputField placeholder="Enter password..." type="password" name="password" label="Password" showLabel="true" />
          </Form.Item>
          <Form.Item>
            <CustomButton>
              Log in
            </CustomButton>
          </Form.Item>
        </Form>
        <Row justify="start">
          <Text>Don’t have account?</Text>
          <Link to="register">
            <Text style={{ color: token[1].thirdColor, marginLeft: 5 }}>Register now</Text>
          </Link>
        </Row>
      </Row>
    </PublicLayout>
  );
}
