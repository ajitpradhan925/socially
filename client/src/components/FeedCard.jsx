import {
  Row, Card, Typography, Col,
} from 'antd';
// import useToken from 'antd/es/theme/useToken';
import React from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import profilePhoto from '../assets/profile.svg';
import blog from '../assets/blog.png';

const { Title, Text } = Typography;

export default function FeedCard() {
  //   const token = useToken();
  //   const Row = styled(AntRow)`
  //     background-color: ${token[1].secondary};
  //     width: 100%;
  //     height: 450px;
  //     border-radius: 40px;
  //   `;
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
            Ajit Pradhan
          </Title>
          <Text style={{ textAlign: 'right' }}>Posted 3 months ago....</Text>
        </Col>
      </Row>
      <Row>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
        <Col span={24} style={{ marginTop: 20 }}>
          <img src={blog} alt="Profile" />
        </Col>
      </Row>
    </Card>
  );
}
