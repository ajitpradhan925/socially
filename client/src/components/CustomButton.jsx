import React from 'react';
import styled from 'styled-components';
import { Button as AntButton, Spin } from 'antd';
import PropTypes from 'prop-types';
import useToken from 'antd/es/theme/useToken';

export default function CustomButton({ ...props }) {
  const {
    children, style, loader, onClick,
  } = props;
  const token = useToken();

  const Button = styled(AntButton)`
        // margin-top: 2%;
        width: 100%;
        background-color: ${token[1].thirdColor};
        height: 3rem;
        font-weight: bold;
        font-size: 1rem;
        &:hover {
          border: none;
        }
    `;
  return (
    <Button status="warning" htmlType="submit" style={style} onClick={onClick}>
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
