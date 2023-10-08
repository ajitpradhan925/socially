import { Layout as AntLayout } from 'antd';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useToken from 'antd/es/theme/useToken';

export default function PublicLayout({ children }) {
  const token = useToken();

  console.log({ token: token[1].primary });

  const Layout = styled(AntLayout)`
        height: 100vh;
        width: 100%;
        background-color: ${token[1].primary};
        padding: 5%;
    `;

  return (
    <Layout>
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
