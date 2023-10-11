import { Layout } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
// import useToken from 'antd/es/theme/useToken';
import { Content } from 'antd/es/layout/layout';
import { AntHeader } from './index';
import './style.css';

export default function PrivateLayout({ children }) {
  // const token = useToken();

  // console.log({ token: token[1].primary });

  return (
    <Layout className="global-layout">
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
