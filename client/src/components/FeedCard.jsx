import {
  Row, Card, Typography, Col,
} from 'antd';
import React from 'react';
import { CommentOutlined, HeartOutlined } from '@ant-design/icons';
import profilePhoto from '../assets/profile.svg';
import { SERVER_BASE_URL } from '../api/apiConfig';

const { Title, Text } = Typography;
const BASE_URL = `${SERVER_BASE_URL}/uploads`;
export default function FeedCard({ post }) {
  function getTime() {
    const postDate = new Date(post.createdAt);
    const currentDate = new Date();
    const timeDifference = currentDate - postDate;
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursAgo = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    if (daysAgo === 0) {
      if (hoursAgo > 0) {
        return `${hoursAgo} ${hoursAgo === 1 ? 'hour' : 'hours'} ago...`;
      }
      return ' just now...';
    }

    return `${daysAgo} ${daysAgo === 1 ? 'day' : 'days'} ago...`;
  }

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
        <Text>
          Posted
          {getTime()}
        </Text>
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
