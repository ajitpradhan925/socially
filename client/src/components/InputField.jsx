import React from 'react';
import styled from 'styled-components';
import { Input as AntInput, Typography } from 'antd';
import PropTypes from 'prop-types';
import useToken from 'antd/es/theme/useToken';

const { Text } = Typography;

export default function InputField({ ...props }) {
  const {
    // eslint-disable-next-line react/prop-types
    placeholder, type, name, onChange, value, label, showLabel, style,
  } = props;
  const token = useToken();

  const Input = styled(AntInput)`
        background-color: ${token[1].secondary};
        padding: 1rem;
    `;
  return (
    <>
      {showLabel && (<Text>{`${label}: `}</Text>)}
      <Input
        key={Math.floor(Math.random() * 1000)}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        style={style}
        autoFocus="autoFocus"
      />
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
  // style: false,
};

InputField.defaultProps = {
  placeholder: '',
  type: 'text',
  name: '',
  onChange: () => {},
  value: '',
  label: '',
  showLabel: false,
  // style: {},
};
