import React from 'react'
import { Alert, Button, Calendar, Form, Input, Select, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCrearReservaOut } from '../../slices/bookingsThunks';

const FormUserNoAuth = ({ selectedValue, horasDisponibles }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onFinish = async (values) => {
        const reserva = {
            name: values.name,
            apellidos: values.apellidos,
            email: values.email,
            n_personas: values.n_personas,
            hora: values.hora,
            menu: values.menu,
            alergias: values.alergias,
            fecha: selectedValue.format('YYYY-MM-DD'),
        };
        try {
            dispatch(useCrearReservaOut(reserva))
                .then(response => {
                    if (response) {
                        notification.success({
                            message: 'Reserva Exitosa',
                            description: `¡${values.name} has realizado una reserva para el ${selectedValue.format('YYYY-MM-DD')} a las ${values.hora}!`,
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
    return (
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
                label="Nº Personas"
                name="n_personas"
                rules={[
                    {
                        required: true,
                        message: 'Please input your personas!',
                    },
                ]}
            >
                <Input />
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
                    defaultValue="Basic"
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
                <Select placeholder="Selecciona una hora" style={{ width: 160 }} >
                    {horasDisponibles.map((hora) => (
                        <Select.Option key={hora} value={hora}>
                            {hora}
                        </Select.Option>
                    ))}
                </Select>
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
    )
}

export default FormUserNoAuth