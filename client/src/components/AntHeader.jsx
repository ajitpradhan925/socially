import React from 'react';
import { Layout, Row, Typography } from 'antd';
import styled from 'styled-components';
import useToken from 'antd/es/theme/useToken';
import { Link } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';

import profilePhoto from '../assets/profile.svg';

const { Header } = Layout;
const { Title } = Typography;

export default function AntHeader() {
  const token = useToken();

  const StyledHeader = styled(Header)`
    background-color: ${token[1].secondary};
  `;
  return (
    <StyledHeader>
      <Row justify="space-between">
        {/* <img src={logo} alt="Logo" /> */}
        <Link to="/">Home</Link>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img src={profilePhoto} alt="Profile" style={{ width: '40px', height: '40px' }} />
          <Title level={5} style={{ margin: 0, marginLeft: 10 }}>Ajit Pradhan</Title>
          <DownOutlined style={{ marginLeft: 5, fontWeight: 'bold' }} />
        </div>
      </Row>
    </StyledHeader>
  );
}
