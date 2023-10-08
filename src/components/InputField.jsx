import React from 'react';
import styled from 'styled-components';
import { Input as AntInput } from 'antd';
import PropTypes from 'prop-types';
import useToken from 'antd/es/theme/useToken';

export default function InputField({ ...props }) {
  const { placeholder } = props;
  const token = useToken();

  console.log({ placeholder, props });
  const Input = styled(AntInput)`
        // width: 40%;
        margin-top: 5%;
        background-color: ${token[1].secondary};
        padding: 1rem;
    `;
  return (
    <Input placeholder={placeholder} status="warning" />
  );
}

InputField.propTypes = {
  placeholder: PropTypes.string,
};

InputField.defaultProps = {
  placeholder: '',
};
