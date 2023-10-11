import React from 'react';
import { Input, Typography } from 'antd';
import PropTypes from 'prop-types';
import './style.css';

const { Text } = Typography;

export default function InputField({ ...props }) {
  const {
    // eslint-disable-next-line react/prop-types
    placeholder, type, name, onChange, value, label, showLabel, style,
  } = props;

  return (
    <>
      {showLabel && (<Text>{`${label}: `}</Text>)}
      <Input
        className="input"
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
