import React from 'react';
import { Col, Row } from 'antd';
import PrivateLayout from '../components/PrivateLayout';
import { FeedCard, PostCard } from '../components';

export default function Home() {
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
