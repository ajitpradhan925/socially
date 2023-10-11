import React from 'react';
import { Button, Spin } from 'antd';
import PropTypes from 'prop-types';
import './style.css';

export default function CustomButton({ ...props }) {
  const {
    children, style, loader, onClick,
  } = props;

  return (
    <Button className="button" status="warning" htmlType="submit" style={style} onClick={onClick}>
      { !loader ? children : (<Spin style={{ marginRight: 5 }} />) }
    </Button>
  );
}

CustomButton.propTypes = {
  children: PropTypes.node,
  style: false,
  loader: PropTypes.bool,
  onClick: PropTypes.func,
};

CustomButton.defaultProps = {
  children: (<span />),
  style: {},
  loader: false,
  onClick: () => {},
};
