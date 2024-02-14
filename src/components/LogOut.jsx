import React from 'react';
import { Menu, notification } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { clearUser } from '../slices/userSlice';
import { Link, useNavigate } from 'react-router-dom';

const LogOut = () => {

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(clearUser());
        notification.success({
            message: `See you!`,
            description: 'We hope you enjoy your experience.',
        });
    };

    return (
        <Menu
            className='lg:w-[100%] w-[10%] lg:mb-10 mt-2 rounded font-lilita bg-SECONDARY'
            mode="vertical"
            style={{
                color: 'white'
            }}
        >
            <Menu.Item
                key="logout"
                style={{
                    color: 'white',
                }}
            >
                <Link to="/" onClick={handleLogout} className='text-white '>
                    <LogoutOutlined style={{ fontSize: '20px', margin: '10px' }} />
                </Link>
            </Menu.Item>
        </Menu>
    );
};

export default LogOut;
