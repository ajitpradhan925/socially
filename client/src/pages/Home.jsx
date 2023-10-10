/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Col, Row, Spin } from 'antd';
import PrivateLayout from '../components/PrivateLayout';
import { FeedCard, PostCard } from '../components';
import usePost from '../hooks/usePost';

export default function Home() {
  const { posts, isLoading, addPost } = usePost();

  return (
    <PrivateLayout>
      <Row style={{
        display: 'flex', flexDirection: 'column', marginLeft: '20%', marginRight: '20%', marginTop: '2%',
      }}
      >
        <Col>
          <PostCard addPost={addPost} />
        </Col>

        {isLoading ? (<Spin size="large" style={{ marginTop: '25%' }} />)
          : posts.map((post) => (
            <Col style={{ marginTop: '5%' }}>
              <FeedCard key={post._id} post={post} />
            </Col>
          ))}

      </Row>

    </PrivateLayout>
  );
}
