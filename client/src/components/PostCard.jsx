import {
  Card as AntCard, Col, Row, Upload, Typography,
} from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';

import { CameraOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import CustomButton from './CustomButton';
import InputField from './InputField';
// import usePost from '../hooks/usePost';
const { Text } = Typography;

export default function PostCard({ addPost }) {
  const [postValue, setPostValue] = useState('');
  const Card = styled(AntCard)`
    width: 100%;
    border-radius: 10px;
  `;
  const [fileList, setFileList] = useState();

  function onChangePostText(text) {
    setPostValue(text);
  }

  const handleChange = (event) => {
    setFileList(event);
  };

  const onPost = () => {
    if (fileList.file) {
      const formData = new FormData();
      formData.append('image', fileList.file.originFileObj);
      formData.append('description', postValue);
      formData.append('title', postValue);
      addPost(formData);
    }
  };

  return (
    <Card>
      <Row
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <Col style={{ width: '75%', borderRadius: '10px', height: '60px' }}>
          <InputField
            value={postValue}
            onChange={(event) => onChangePostText(event.target.value)}
            placeholder="Post Something..."
          />
          <Upload
            maxCount={1}
            onChange={handleChange}
            accept="image/png, image/jpeg"
            style={{ marginTop: '5%' }}
          >
            <CameraOutlined style={{
              position: 'absolute',
              right: '5%',
              top: '30%',
            }}
            />
          </Upload>
        </Col>
        <CustomButton
          onClick={onPost}
          style={{ width: '10%', marginLeft: '5%', marginTop: '1%' }}
        >
          Post
        </CustomButton>
      </Row>

      {fileList?.file?.name ? (
        <Text style={{ marginLeft: '5%' }}>
          {fileList.file.name}
        </Text>
      ) : null}

      {/* {thumbURL ? (
        <Row>
          <img src={fileList.file.thumbURL} alt="Upload post" />
        </Row>
      ) : null } */}
    </Card>
  );
}

PostCard.propTypes = {
  addPost: PropTypes.func,
};

PostCard.defaultProps = {
  addPost: () => {},
};
