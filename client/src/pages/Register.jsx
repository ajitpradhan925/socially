import {
  Form, Row, Typography,
} from 'antd';
import React from 'react';
import useToken from 'antd/es/theme/useToken';
import { Link, useNavigate } from 'react-router-dom';
import { InputField, PublicLayout, CustomButton } from '../components';
import loginIllustration from '../assets/register_illustration.svg';
import useAuth from '../hooks/useAuth';
import { showErrorMessage, showSuccessMessage } from '../config';

const { Text, Title } = Typography;

export default function Register() {
  const token = useToken();
  const navigate = useNavigate();

  function handleSuccess() {
    navigate('/login');
    showSuccessMessage('Successfully registered, please sign in...');
  }

  const { registerUser } = useAuth(handleSuccess);
  const onFinish = (values) => {
    console.log('Success:', values);
    registerUser(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    showErrorMessage(errorInfo);
  };

  return (
    <PublicLayout>
      <Row style={{ flexDirection: 'column' }} align="middle">
        <img src={loginIllustration} alt="Register Illustration" style={{ width: '170px', height: '130px' }} />
        <Title level={3}>Create new account!</Title>
        <Text>Let’s join us :)</Text>
      </Row>
      <Row justify="center" style={{ marginTop: '2%', flexDirection: 'column' }} align="middle">
        <Form
          name="register"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          style={{ width: '40%' }}
        >
          <Form.Item
            name="name"
            rules={[{ required: true }]}
          >
            <InputField placeholder="Enter name..." name="name" label="Name" showLabel />
          </Form.Item>
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
            <InputField placeholder="Enter email..." name="email" label="Email" showLabel />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <InputField placeholder="Enter password..." type="password" name="password" label="Password" showLabel />
          </Form.Item>
          <Form.Item>
            <CustomButton>
              Register
            </CustomButton>
          </Form.Item>
        </Form>
        <Row justify="start">
          <Text>Already have account?</Text>
          <Link to="/login">
            <Text style={{ color: token[1].thirdColor, marginLeft: 5, fontWeight: 'bold' }}>Log In</Text>
          </Link>
        </Row>
      </Row>
    </PublicLayout>
  );
}
