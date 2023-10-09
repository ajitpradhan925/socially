import { Card as AntCard, Row, Typography } from 'antd';
import useToken from 'antd/es/theme/useToken';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import InputField from './InputField';
// import TextArea from 'antd/es/input/TextArea';
import CustomButton from './CustomButton';
import InputField from './InputField';

const { Text } = Typography;

export default function PostCard() {
  const token = useToken();
  const Card = styled(AntCard)`
    // background-color: ${token[1].secondary};
    width: 100%;
    height: 200px;
    border-radius: 10px;
  `;
  return (
    <Card>
      <Row style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center',
      }}
      >
        <InputField placeholder="Post Something..." style={{ width: '75%', borderRadius: '10px', height: '60px' }} />
        <CustomButton style={{ width: '10%', marginLeft: '5%', marginTop: '1%' }}>Post</CustomButton>
      </Row>
      <Text style={{ marginLeft: '5%', marginTop: '1%' }}>
        <Link to="/">
          Add Photos
        </Link>
      </Text>
    </Card>
  );
}
