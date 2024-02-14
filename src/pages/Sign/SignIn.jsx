import React, { useState } from 'react'
import { Button, Form, Input, notification } from 'antd';
import logo from '../../assets/Logo.png';
import { useRegister } from '../../slices/userThunks';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const SignIn = () => {
    const [api, contextHolder] = notification.useNotification();

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [nombre, setNombre] = useState()
    const [apellidos, setApellidos] = useState()


    const handleOnChangeName = (e) => {
        setNombre(e.target.value)
    }
    const handleOnChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleOnChangePass = (e) => {
        setPassword(e.target.value)
    }
    const handleOnChangeApellidos = (e) => {
        setApellidos(e.target.value)
    }
    const handleRegister = async () => {
        const user = {
            name: nombre,
            apellidos: apellidos,
            email: email,
            password: password
        }
        await dispatch(useRegister(user))
        notification.success({
            message: 'Registro Exitoso',
            description: 'Tu cuenta ha sido registrada correctamente.',
        });
        navigate('/')
    }
    return (
        <div className='bg-TERCIARY h-screen w-screen flex items-center justify-around flex-col'>
            <div className='h-[10px] w-[200px] ml-14'>
                <img src={logo} alt="" />
            </div>
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
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Nombre"
                    name="nombre"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                    ]}
                    onChange={handleOnChangeName}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Apellidos"
                    name="apellidos"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your apellidosF!',
                        },
                    ]}
                    onChange={handleOnChangeApellidos}
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
                    onChange={handleOnChangeEmail}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    onChange={handleOnChangePass}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" className='bg-SECONDARY' htmlType="submit" onClick={handleRegister}>
                        Sign in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default SignIn