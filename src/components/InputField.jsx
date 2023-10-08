import React from 'react';
import styled from 'styled-components';
import { Input as AntInput, Typography } from 'antd';
import PropTypes from 'prop-types';
import useToken from 'antd/es/theme/useToken';

const { Text } = Typography;

export default function InputField({ ...props }) {
  const {
    placeholder, type, name, onChange, value, label, showLabel,
  } = props;
  const token = useToken();

  const Input = styled(AntInput)`
        background-color: ${token[1].secondary};
        padding: 1rem;
    `;
  return (
    <>
      {showLabel && (<Text>{`${label}: `}</Text>)}
      <Input type={type} name={name} onChange={onChange} value={value} placeholder={placeholder} />
    </>
  );
}

InputField.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string,
  showLabel: PropTypes.bool,
};

InputField.defaultProps = {
  placeholder: '',
  type: 'text',
  name: '',
  onChange: () => {},
  value: '',
  label: '',
  showLabel: false,
};
