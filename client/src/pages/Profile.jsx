/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Row, Space, Typography } from 'antd';
import PrivateLayout from '../components/PrivateLayout';
import useAuth from '../hooks/useAuth';
// import Title from 'antd/es/typography/Title';
// import { FeedCard, PostCard } from '../components';
// import usePost from '../hooks/usePost';

export default function Profile() {
//   const { posts, isLoading, addPost } = usePost();
  const { user } = useAuth();
  const { Text, Title } = Typography;
  return (
    <PrivateLayout>
      <Row style={{
        display: 'flex', alignContent: 'center', flexDirection: 'column', marginLeft: '20%', marginRight: '20%', marginTop: '2%',
      }}
      >
        <Title> Profile Info</Title>

        <Row style={{
          display: 'flex', flexDirection: 'column', borderBottom: 1, marginTop: '3%',
        }}
        >
          <Space>
            <Text>Name: </Text>
            {' '}
            <Text level={5}>{user.name}</Text>
          </Space>
        </Row>

        <Row style={{
          display: 'flex', flexDirection: 'column', borderBottom: 1, marginTop: '3%',
        }}
        >
          <Space>
            <Text>Email: </Text>
            <Text level={5}>{user.email}</Text>
          </Space>
        </Row>

      </Row>
    </PrivateLayout>
  );
}
