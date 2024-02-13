import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem('Login', 'login'),
    getItem('Sign In', 'sign')
];

const Settings = () => (
    <Menu
        className='w-[90%] mb-10 rounded font-lilita bg-SECONDARY'
        mode="vertical"
        style={{
            color: 'white'
        }}
    >
        {items.map(item => (
            <Menu.Item key={item.key} icon={item.icon} style={{
                color: 'white',
            }}
            >
                {item.children && item.children.length > 0 ? (
                    <Menu.SubMenu key={item.key} title={item.label} icon={item.icon}>
                        {item.children.map(child => (
                            <Menu.Item key={child.key} icon={child.icon} >
                                <Link to={`/${child.key}`} ></Link>
                            </Menu.Item>
                        ))}
                    </Menu.SubMenu>
                ) : (
                    <Link to={`/${item.key}`}>{item.label}</Link>
                )}
            </Menu.Item>
        ))}
    </Menu>
);

export default Settings;
