import React from 'react';
import { Menu } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { clearUser } from '../slices/userSlice';
import { Link, useNavigate } from 'react-router-dom';

const LogOut = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(clearUser());
    };

    return (
        <Menu
            className='w-[100%] mb-10 rounded font-lilita bg-SECONDARY'
            mode="vertical"
            style={{
                color: 'white'
            }}
        >
            <Menu.Item
                key="logout"
                icon={<LogoutOutlined />}
                style={{
                    color: 'white'
                }}
            >
                <Link to="/" onClick={handleLogout} className='text-white'>
                    Log Out
                </Link>
            </Menu.Item>
        </Menu>
    );
};

export default LogOut;
