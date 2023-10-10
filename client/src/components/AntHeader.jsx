/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import {
  Dropdown, Layout, Row, Space, Typography,
} from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { BulbFilled, BulbOutlined, DownOutlined } from '@ant-design/icons';

import profilePhoto from '../assets/profile.svg';
import useAuth from '../hooks/useAuth';
import ThemeContext from '../contexts';

const { Header } = Layout;
const { Title } = Typography;

const items = [
  {
    label: 'Profile',
    key: 1,
  },
  {
    label: 'Logout',
    key: 2,
  },
];

export default function AntHeader() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  // const [isDarkMode, setIsDarkMode] = useState(false);

  const value = useContext(ThemeContext);

  const onClick = ({ key }) => {
    if (key === '2') {
      logout(navigate);
    }
  };

  // console.log({ isDarkMode });
  // useEffect(() => {
  //   changeAlgorithm(isDarkMode);
  // }, [isDarkMode]);
  return (
    <Header>
      <Row justify="space-between">
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Title level={2} style={{ margin: 0, color: '#fff' }}>Socially</Title>
          <Link to="/" style={{ marginLeft: 15, color: '#fff' }}>Home</Link>
        </div>
        { !value.isDark ? (
          <BulbOutlined
            onClick={() => value.changeAlgorithm()}
            style={{ color: value.isDark ? 'orange' : '#fff', fontSize: '1.2rem' }}
          />
        ) : (
          <BulbFilled
            onClick={() => value.changeAlgorithm()}
            style={{ color: value.isDark ? 'orange' : '#fff', fontSize: '1.5rem' }}
          />
        ) }
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img src={profilePhoto} alt="Profile" style={{ width: '40px', height: '40px' }} />

          <Dropdown
            menu={{
              items,
              onClick,
            }}
          >
            <Space>
              <Title level={5} style={{ margin: 0, marginLeft: 10, color: '#fff' }}>Ajit Pradhan</Title>
              <DownOutlined style={{ marginLeft: 5, fontWeight: 'bold', color: '#fff' }} />
            </Space>
          </Dropdown>
          {/* <DownOutlined style={{ marginLeft: 5, fontWeight: 'bold', color: '#fff' }} /> */}
        </div>
      </Row>
    </Header>
  );
}
