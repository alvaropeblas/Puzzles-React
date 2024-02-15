import React from 'react'
import { Alert, Button, Calendar, Form, Input, Select, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCrearReserva } from '../../slices/bookingsThunks';

const FormUserAuth = ({ selectedValue, horasDisponibles }) => {
    const { user, token } = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onFinish = async (values) => {
        const reserva = {
            n_personas: values.n_personas,
            menu: values.menu,
            alergias: values.alergias,
            fecha: selectedValue.format('YYYY-MM-DD'),
            hora: values.hora,
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
                required={true}
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
                required={true}
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
                required={true}
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
                required={true}
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
                required={true}
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
                required={true}
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
    )
}

export default FormUserAuth