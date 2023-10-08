import React from 'react';
import styled from 'styled-components';
import { Button as AntButton } from 'antd';
import PropTypes from 'prop-types';
import useToken from 'antd/es/theme/useToken';

export default function CustomButton({ ...props }) {
  const { children } = props;
  const token = useToken();

  const Button = styled(AntButton)`
        margin-top: 2%;
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
    <Button status="warning" htmlType="submit">
      { children }
    </Button>
  );
}

CustomButton.propTypes = {
  children: PropTypes.node,
};

CustomButton.defaultProps = {
  children: (<span />),
};
