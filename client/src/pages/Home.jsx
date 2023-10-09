import React from 'react';
import { Col, Row } from 'antd';
import PrivateLayout from '../components/PrivateLayout';
import { FeedCard, PostCard } from '../components';
import useAuth from '../hooks/useAuth';

export default function Home() {
  const { isLoggedIn, token } = useAuth();
  console.log({ isLoggedIn, token });
  return (
    <PrivateLayout>
      <Row style={{
        display: 'flex', flexDirection: 'column', marginLeft: '20%', marginRight: '20%', marginTop: '2%',
      }}
      >
        <Col>
          <PostCard />
        </Col>
        <Col style={{ marginTop: '5%' }}>
          <FeedCard />
        </Col>
      </Row>
    </PrivateLayout>
  );
}
