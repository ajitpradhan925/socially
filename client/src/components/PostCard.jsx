import {
  Card, Col, Row, Upload,
} from 'antd';
import React, { useState } from 'react';
// import styled from 'styled-components';

import { CameraOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import CustomButton from './CustomButton';
import InputField from './InputField';
import './style.css';
import { showErrorMessage } from '../config';

export default function PostCard({ addPost }) {
  const [postValue, setPostValue] = useState('');
  const [fileList, setFileList] = useState({});

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
    } else {
      showErrorMessage('Please attach the image');
    }
  };

  return (
    <Card style={{ paddingBottom: 20 }}>
      <Row
        className="row-container"
      >
        <Col style={{ width: '80%', borderRadius: '10px', height: '60px' }}>
          <InputField
            value={postValue}
            onChange={(event) => onChangePostText(event.target.value)}
            placeholder="Post Something..."
            style={{ paddingRight: '10%' }}
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
          style={{ width: '15%', marginLeft: '5%', marginTop: '1%' }}
        >
          Post
        </CustomButton>
      </Row>
    </Card>
  );
}

PostCard.propTypes = {
  addPost: PropTypes.func,
};

PostCard.defaultProps = {
  addPost: () => {},
};
