/* eslint-disable no-underscore-dangle */
import React from 'react';
import {
  Col, Row, Spin, Typography,
} from 'antd';
import PrivateLayout from '../components/PrivateLayout';
import { FeedCard, PostCard } from '../components';
import usePost from '../hooks/usePost';

export default function Home() {
  const { posts, isLoading, addPost } = usePost();
  const { Text } = Typography;

  return (
    <PrivateLayout>
      <Row style={{
        display: 'flex', flexDirection: 'column', marginLeft: '20%', marginRight: '20%', marginTop: '2%',
      }}
      >
        <Col>
          <PostCard addPost={addPost} />
        </Col>

        {isLoading && posts.length ? (<Spin size="large" style={{ marginTop: '25%' }} />)
          : posts.map((post) => (
            <Col key={post._id} style={{ marginTop: '5%' }}>
              <FeedCard post={post} />
            </Col>
          ))}

        {!isLoading && !posts.length ? (
          <Text>
            No posts available
          </Text>
        ) : null}
      </Row>

    </PrivateLayout>
  );
}
