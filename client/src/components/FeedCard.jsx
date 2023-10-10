import {
  Row, Card, Typography, Col,
} from 'antd';
// import useToken from 'antd/es/theme/useToken';
import React from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import { CommentOutlined, HeartOutlined } from '@ant-design/icons';
import profilePhoto from '../assets/profile.svg';
import { SERVER_BASE_URL } from '../api/apiConfig';

const { Title, Text } = Typography;
const BASE_URL = `${SERVER_BASE_URL}/uploads`;
export default function FeedCard({ post }) {
  return (
    <Card>
      <Row justify="space-between">
        <Col
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <img
            src={profilePhoto}
            alt="Profile"
            style={{ width: '40px', height: '40px' }}
          />
          <Title level={5} style={{ margin: 0, marginLeft: 10 }}>
            {post.user.name}
          </Title>
        </Col>
        <Text>Posted 3 months ago....</Text>
      </Row>
      <Row>
        <Title level={2}>
          {post.description}
        </Title>
        <Col span={24} style={{ marginTop: 20 }}>
          <img
            style={{
              width: '100%',
              maxHeight: '500px',
              borderRadius: 10,
              objectFit: 'contain',
            }}
            src={`${BASE_URL}/${post.image.fileName}`}
            alt="Profile"
          />
        </Col>
      </Row>
      <Row style={{ display: 'flex', marginTop: '2%' }}>
        {/* <HeartOutlined /> */}
        <span style={{ marginRight: '10px' }}>
          <HeartOutlined />
          <Text style={{ marginLeft: 5 }}>
            {post.likeCount}
          </Text>
        </span>
        <span>
          <CommentOutlined />
          <Text style={{ marginLeft: 5 }}>
            {post.comments.length}
          </Text>
        </span>
      </Row>
    </Card>
  );
}

FeedCard.propTypes = {
  post: false,
};

FeedCard.defaultProps = {
  post: {},
};
