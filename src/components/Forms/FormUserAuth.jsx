import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input, Select, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCrearReserva } from '../../slices/bookingsThunks';
import { useCrearTarjeta, useObtenerTarjeta } from '../../slices/userThunks';

const FormUserAuth = ({ selectedValue, horasDisponibles }) => {
    const { user, token, tarjetas } = useSelector((state) => state.user)
    const menu = useSelector((state) => state.menu.menu)
    const [saveTarjeta, setSaveTarjeta] = useState()
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
                        navigate('/puzzles-front/')
                        if (saveTarjeta) {
                            const card = {
                                n_tarjeta: values.tarjeta,
                                f_vencimiento: values.fecha_vencimiento,
                                cvv: values.cvv,
                            }
                            dispatch(useCrearTarjeta(token, card))
                        }
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
    const onChange = (e) => {
        setSaveTarjeta(e.target.checked);
    };
    useEffect(() => {
        dispatch(useObtenerTarjeta(token))
    }, [])
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
                        message: 'Por favor, ingrese su tarjeta.',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="remember"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Checkbox onChange={onChange}>Guardar Tarjeta</Checkbox>
            </Form.Item>
            <Form.Item
                label="Fecha venc."
                required={true}
                name="fecha_vencimiento"
                rules={[
                    {
                        required: true,
                        message: 'Por favor, ingrese su fecha de vencimiento.',
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
                        message: 'Por favor, ingrese su CVV.',
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
                        message: 'Por favor, ingrese el número de comensales.',
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
                    key={menu}
                    defaultValue={menu}
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
                <Input type='textarea' />
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