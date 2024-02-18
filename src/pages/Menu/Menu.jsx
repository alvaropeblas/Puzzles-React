import { Button, Card, Col, Row, Menu as AntMenu } from 'antd';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setMenu } from '../../slices/menuSlicer';
import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

const { Item: MenuItem, SubMenu } = AntMenu;
const MenuCardUno = ({ title, content, handleMenuClick, menuType }) => {
    const props = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(50px)' },
    });

    return (
        <animated.div style={props}>
            <Card title={title} bordered={false} style={{ width: 350 }}>
                <p>{content}</p>
                <AntMenu mode="vertical">
                    <SubMenu key="1" title="Entrada">
                        <MenuItem key="1.1">Ensalada fresca</MenuItem>
                        <MenuItem key="1.2">Sopa del día</MenuItem>
                    </SubMenu>
                    <SubMenu key="2" title="Plato Principal">
                        <MenuItem key="2.1">Pollo asado con verduras</MenuItem>
                        <MenuItem key="2.2">Pasta carbonara</MenuItem>
                    </SubMenu>
                    <SubMenu key="3" title="Postre">
                        <MenuItem key="3.1">Tarta de manzana</MenuItem>
                        <MenuItem key="3.2">Helado de vainilla</MenuItem>
                    </SubMenu>
                </AntMenu>
                <Link to="/puzzles-front/booking">
                    <Button
                        type="primary"
                        className='bg-S_COLOR mt-9'
                        onClick={() => handleMenuClick(menuType)}
                    >
                        Reservar
                    </Button>
                </Link>
            </Card>
        </animated.div>
    );
};

const MenuCardDos = ({ title, content, handleMenuClick, menuType }) => {
    const props = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(500px)' },
        config: { duration: 500 },
    });

    return (
        <animated.div style={props}>
            <Card title={title} bordered={false} style={{ width: 350 }}>
                <p>{content}</p>
                <AntMenu mode="vertical">
                    <SubMenu key="4" title="Entrada">
                        <MenuItem key="4.1">Carpaccio de salmón</MenuItem>
                        <MenuItem key="4.2">Queso brie horneado</MenuItem>
                    </SubMenu>
                    <SubMenu key="5" title="Plato Principal">
                        <MenuItem key="5.1">Filete de ternera con salsa de champiñones</MenuItem>
                        <MenuItem key="5.2">Sushi variado</MenuItem>
                    </SubMenu>
                    <SubMenu key="6" title="Postre">
                        <MenuItem key="6.1">Panna cotta con frutas del bosque</MenuItem>
                        <MenuItem key="6.2">Chocolate fondue</MenuItem>
                    </SubMenu>
                </AntMenu>
                <Link to="/puzzles-front/booking">
                    <Button
                        type="primary"
                        className='bg-S_COLOR mt-9'
                        onClick={() => handleMenuClick(menuType)}
                    >
                        Reservar
                    </Button>
                </Link>
            </Card>
        </animated.div>
    );
};


const MenuCardTres = ({ title, content, handleMenuClick, menuType }) => {
    const props = useSpring({
        opacity: 1,
        transform: 'translateX(0)',
        from: { opacity: 0, transform: 'translateX(1000px)' },
        config: { duration: 1000 },
    });

    return (
        <animated.div style={props}>
            <Card title={title} bordered={false} style={{ width: 350 }}>
                <p>{content}</p>
                <AntMenu mode="vertical">
                    <SubMenu key="7" title="Entrada">
                        <MenuItem key="7.1">Ostras frescas con limón</MenuItem>
                        <MenuItem key="7.2">Caviar con blinis</MenuItem>
                    </SubMenu>
                    <SubMenu key="8" title="Plato Principal">
                        <MenuItem key="8.1">Solomillo de wagyu con trufas</MenuItem>
                        <MenuItem key="8.2">Langosta a la parrilla</MenuItem>
                    </SubMenu>
                    <SubMenu key="9" title="Postre">
                        <MenuItem key="9.1">Soufflé de chocolate negro</MenuItem>
                        <MenuItem key="9.2">Tiramisú de pistacho</MenuItem>
                    </SubMenu>
                </AntMenu>
                <Link to="/puzzles-front/booking">
                    <Button
                        type="primary"
                        className='bg-S_COLOR mt-9'
                        onClick={() => handleMenuClick(menuType)}
                    >
                        Reservar
                    </Button>
                </Link>
            </Card>
        </animated.div>
    );
};

const Menu = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleMenuClick = (menuType) => {
        dispatch(setMenu(menuType))
        navigate(`/puzzles-front/bookings`);
    }
    return (
        <div className='bg-T_COLOR h-screen w-screen flex justify-around items-center text-center'>
            <Row gutter={30} style={{marginLeft: '5%'}}>
                <Col xs={24} sm={12} md={8} lg={8} xl={8} span={8}>
                    <MenuCardUno
                        title="Menú Básico"
                        content="Una selección simple y deliciosa para satisfacer tus necesidades."
                        handleMenuClick={handleMenuClick}
                        menuType="Basic"
                    />
                </Col>
                <Col xs={24} sm={12} md={8} lg={8} xl={8} span={8}>
                    <MenuCardDos
                        title="Menú Medio"
                        content="Una opción más variada para aquellos que buscan algo especial."
                        handleMenuClick={handleMenuClick}
                        menuType="Medium"
                    />
                </Col>
                <Col xs={24} sm={12} md={8} lg={8} xl={8} span={8}>
                    <MenuCardTres
                        title="Menú Premium"
                        content="La experiencia gastronómica definitiva con ingredientes exclusivos."
                        handleMenuClick={handleMenuClick}
                        menuType="Premium"
                    />
                </Col>
            </Row>
        </div>
    );
}

export default Menu;
