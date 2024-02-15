import React from 'react';
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
        className='lg:w-[90%] w-[35%]  lg:flex-col flex  lg:mb-10 mt-0.5  rounded font-lilita bg-SECONDARY'
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
                                <Link to={`/puzzles-front/${child.key}`} ></Link>
                            </Menu.Item>
                        ))}
                    </Menu.SubMenu>
                ) : (
                    <Link to={`/puzzles-front/${item.key}`}>{item.label}</Link>
                )}
            </Menu.Item>
        ))}
    </Menu>
);

export default Settings;
