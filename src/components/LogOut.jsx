import React from 'react';
import { Menu, notification } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { clearUser } from '../slices/userSlice';
import { Link } from 'react-router-dom';

const LogOut = () => {

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(clearUser());
        notification.success({
            message: `Hasta pronto!`,
            description: 'Esperamos que haya disfrutado de la experiencia.',
        });
    };

    return (
        <Menu
            className='lg:w-[100%] w-[10%] lg:mb-10  mt-2 rounded font-lilita bg-S_COLOR'
            mode="vertical"
            style={{
                color: 'red'
            }}
        >
            <Menu.Item
                key="logout"
                style={{
                    color: 'white',
                    fontSize: '16px',
                }}
            >
                <Link to="/puzzles-front/" onClick={handleLogout} className='text-white '>
                    <LogoutOutlined style={{ fontSize: '20px', margin: '10px' }} />
                    Exit
                </Link>
            </Menu.Item>
        </Menu>
    );
};

export default LogOut;
