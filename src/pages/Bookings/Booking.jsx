import { Alert, Button, Calendar, Form, Input, Select, notification } from 'antd';
import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import Notification from '../../components/Notifications/NotificationBooking';
import { useCrearReserva } from '../../slices/bookingsThunks';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Booking = () => {
    const [value, setValue] = useState(() => dayjs('2024-02-25'));
    const [selectedValue, setSelectedValue] = useState(() => dayjs('2024-02-25'));
    const [isVisible, setIsVisible] = useState(false);
    const [formIsVisible, setFormIsVisible] = useState(false);
    const { user, token } = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const onFinish = async (values) => {
        const reserva = {
            n_personas: values.n_personas,
            menu: values.menu,
            alergias: values.alergias,
            fecha: selectedValue.format('YYYY-MM-DD'),
        };
        try {
            dispatch(useCrearReserva(token, reserva))
                .then(response => {
                    if (response) {
                        notification.success({
                            message: 'Reserva Exitosa',
                            description: `¡${user.name} has realizado una reserva para el ${selectedValue.format('YYYY-MM-DD')} a las ${values.hora}!`,
                            placement: 'bottomRight',
                        });
                        navigate('/')
                        return
                    }
                    notification.error({
                        message: 'Reserva no creada',
                        description: `¡Algun error ha ocurrido lo sentimos pruebe de nuevo mas tarde`,
                        placement: 'bottomRight',
                    });
                });
        } catch (error) {
            console.error('Error during reserva:', error);
        }
    };
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVisible(true);
        }, 500);

        return () => clearTimeout(timeoutId);
    }, []);
    const onSelect = (newValue) => {
        setValue(newValue);
        setSelectedValue(newValue);
        setFormIsVisible(true);

    };
    const onPanelChange = (newValue) => {
        setValue(newValue);
    };


    const formUserNoAuth = () => {
        return (<>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                onFinish={onFinish}
                onFinishFailed={(errorInfo) => {
                    console.log('Failed:', errorInfo);

                }}
                autoComplete="on"
            >
                <Form.Item
                    label="Nombre"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Apellidos"
                    name="apellidos"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your apellidos!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Tarjeta"
                    name="tarjeta"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your tarjeta!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Fecha venc."
                    name="fecha_vencimiento"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your fecha!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="cvv"
                    name="cvv"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your cvv!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Menu"
                    name="menu"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your menu!',
                        },
                    ]}
                >
                    <Select
                        defaultValue="basic"
                        id='menu'
                        style={{ width: 160 }}
                        options={[
                            { value: 'Basic', label: 'Basic' },
                            { value: 'Medium', label: 'Medium' },
                            { value: 'Premium', label: 'Premium' },
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    label="Hora"
                    name="hora"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your hora!',
                        },
                    ]}
                >
                    <Select
                        defaultValue="10:00"
                        id='hora'
                        style={{ width: 160 }}
                        options={[
                            { value: '13:00', label: '13:00' },
                            { value: '14:00', label: '14:00' },
                            { value: '15:00', label: '15:00' },
                            { value: '16:00', label: '16:00' },
                            { value: '17:00', label: '17:00' },
                            { value: '18:00', label: '18:00' },
                            { value: '19:00', label: '19:00' },
                            { value: '20:00', label: '20:00' },
                            { value: '21:00', label: '21:00' },
                            { value: '22:00', label: '22:00' },
                        ]}
                    />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" className='bg-SECONDARY ml-[38%] mt-4' htmlType="submit">
                        Reservar
                    </Button>
                </Form.Item>
            </Form>

        </>)
    }

    const formUserAuth = () => {
        return (<>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 700,
                }}
                onFinish={onFinish}
                onFinishFailed={(errorInfo) => {
                    console.log('Failed:', errorInfo);

                }}
                autoComplete="on"
            >
                <Form.Item
                    label="Tarjeta"
                    name="tarjeta"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your tarjeta!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Fecha venc."
                    name="fecha_vencimiento"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your fecha!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="cvv"
                    name="cvv"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your cvv!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Comensales"
                    name="n_personas"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your comensales!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Menu"
                    name="menu"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your menu!',
                        },
                    ]}
                >
                    <Select
                        defaultValue="basic"
                        id='menu'
                        style={{ width: 160 }}
                        options={[
                            { value: 'Basic', label: 'Basic' },
                            { value: 'Medium', label: 'Medium' },
                            { value: 'Premium', label: 'Premium' },
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    label="Hora"
                    name="hora"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your hora!',
                        },
                    ]}
                >
                    <Select
                        defaultValue="10:00"
                        id='hora'
                        style={{ width: 160 }}
                        options={[
                            { value: '13:00', label: '13:00' },
                            { value: '14:00', label: '14:00' },
                            { value: '15:00', label: '15:00' },
                            { value: '16:00', label: '16:00' },
                            { value: '17:00', label: '17:00' },
                            { value: '18:00', label: '18:00' },
                            { value: '19:00', label: '19:00' },
                            { value: '20:00', label: '20:00' },
                            { value: '21:00', label: '21:00' },
                            { value: '22:00', label: '22:00' },
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    label="Alergias"
                    name="alergias"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your alergias!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" className='bg-SECONDARY ml-[38%] mt-4' htmlType="submit" >
                        Reservar
                    </Button>
                </Form.Item>
            </Form>

        </>)
    }

    return (
        <div className='bg-TERCIARY h-screen w-screen flex items-center justify-around '>
            <div className={`w-[30%] transition-transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-x-[-2em] opacity-0'}`}>
                <Calendar value={value} onSelect={onSelect} onPanelChange={onPanelChange} fullscreen={false} />
            </div>
            <div className={`w-[20%] transition-transform ${formIsVisible ? 'translate-y-0 opacity-100' : 'translate-x-[-4em] opacity-0'}`}>
                {user ? formUserAuth() : formUserNoAuth()}
            </div>
        </div>
    )
}

export default Booking