import { Layout as AntLayout } from 'antd';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useToken from 'antd/es/theme/useToken';
import { Content } from 'antd/es/layout/layout';
import { AntHeader } from './index';

export default function PrivateLayout({ children }) {
  const token = useToken();

  console.log({ token: token[1].primary });

  const Layout = styled(AntLayout)`
        min-height: 100vh;
        width: 100%;
        background-color: ${token[1].primary};
        padding-bottom: 5%;
    `;

  return (
    <Layout>
      <AntHeader />
      <Content>
        { children }
      </Content>
    </Layout>
  );
}

PrivateLayout.propTypes = {
  children: PropTypes.node,
};

PrivateLayout.defaultProps = {
  children: (<div />),
};
