import { Layout } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function PublicLayout({ children }) {
  return (
    <Layout className="global-layout">
      { children }
    </Layout>
  );
}

PublicLayout.propTypes = {
  children: PropTypes.node,
};

PublicLayout.defaultProps = {
  children: (<div />),
};
