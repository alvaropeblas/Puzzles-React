import React, { useState } from 'react'
import { Button, Form, Input, Select, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCrearReservaOut } from '../../slices/bookingsThunks';

const FormUserNoAuth = ({ selectedValue, horasDisponibles }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { menu } = useSelector((state) => state.menu)

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
            setLoading(true);
            dispatch(useCrearReservaOut(reserva))
                .then(response => {
                    if (response) {
                        notification.success({
                            message: 'Reserva Exitosa',
                            description: `¡${values.name} has realizado una reserva para el ${selectedValue.format('YYYY-MM-DD')} a las ${values.hora}!`,
                            placement: 'bottomRight',
                        });
                        navigate('/puzzles-front/')
                        return
                    }
                    notification.error({
                        message: 'Reserva no creada',
                        description: `¡Algun error ha ocurrido lo sentimos pruebe de nuevo mas tarde`,
                        placement: 'bottomRight',
                    });
                }).finally(() => {
                    setLoading(false);
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
                notification.error({
                    message: 'Introduzca los datos correctamente',
                    placement: 'topLeft',
                })
            }}
            autoComplete="on"
        >
            <Form.Item
                label="Nombre"
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Por favor, ingrese su nombre.',
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
                        message: 'Por favor, ingrese sus apellidos.',
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
                        message: 'Por favor, ingrese su correo electrónico.',
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
                        message: 'Por favor, ingrese su tarjeta.',
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
                        message: 'Por favor, ingrese la fecha de vencimiento.',
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
                        message: 'Por favor, ingrese el CVV.',
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
                        message: 'Por favor, ingrese el número de personas.',
                    },
                ]}
            >
                <Input type='number' style={{ width: 160 }} />
            </Form.Item>
            <Form.Item
                label="Menu"
                initialValue={menu}
                name="menu"
                rules={[
                    {
                        required: true,
                        message: 'Por favor, seleccione un menú.',
                    },
                ]}
            >
                <Select
                    id='menu'
                    defaultValue={menu}
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
                        message: 'Por favor, seleccione una hora.',
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
                label="Alergias"
                name="alergias"
                rules={[
                    {
                        required: true,
                        message: 'Por favor, ingrese sus alergias.',
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
                <Button type="primary" className='bg-S_COLOR ml-[38%] mt-4' htmlType="submit" loading={loading}>
                    Reservar
                </Button>
            </Form.Item>
        </Form>
    )
}

export default FormUserNoAuth