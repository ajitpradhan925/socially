/* eslint-disable no-underscore-dangle */
import React from 'react';
import {
  Card, Row, Space, Typography,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import PrivateLayout from '../components/PrivateLayout';
import useAuth from '../hooks/useAuth';
import profilePhoto from '../assets/profile.svg';
import { CustomButton } from '../components';

export default function Profile() {
//   const { posts, isLoading, addPost } = usePost();
  const { user, logout } = useAuth();
  const { Text, Title } = Typography;
  const navigate = useNavigate();

  return (
    <PrivateLayout>
      <Card style={{
        display: 'flex', alignContent: 'center', flexDirection: 'column', marginLeft: '30%', marginRight: '30%', marginTop: '5%',
      }}
      >
        <Row style={{ display: 'flex', flexDirection: 'column' }}>
          <Title style={{ textAlign: 'center', alignSelf: 'center' }} level={3}> Profile Info</Title>

          <img style={{ marginTop: '2%' }} src={profilePhoto} alt="Profile" />

          <Space style={{ alignContent: 'center', marginTop: '10%' }}>
            <Text style={{ fontWeight: 'bold' }}>Name: </Text>
            {' '}
            <Text level={5}>{user.name}</Text>
          </Space>
          <Space>
            <Text style={{ fontWeight: 'bold' }}>Email: </Text>
            <Text level={5}>{user.email}</Text>
          </Space>
          <CustomButton onClick={() => logout(navigate)} style={{ marginTop: '10%' }}>
            Logout
          </CustomButton>
        </Row>
        {/* </Row> */}
      </Card>
    </PrivateLayout>
  );
}
