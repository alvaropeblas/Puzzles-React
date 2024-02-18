import React, { useState } from 'react'
import { Button, Form, Input, notification } from 'antd';
import logo from '../../../public/images/Logo.png';
import { useRegister } from '../../slices/userThunks';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const SignIn = () => {
    const [loading, setLoading] = useState(false);

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
        setLoading(true)
        const user = {
            name: nombre,
            apellidos: apellidos,
            email: email,
            password: password
        }
        dispatch(useRegister(user))
                .then(response => {
                    if (response) {
                        navigate('/puzzles-front/')
                        notification.success({
                            message: 'Registrado!',
                            description: 'Bienvenido a Puzzles.',
                        });
                        return
                    }
                    notification.error({
                        message: 'Registro incompleto',
                        description: 'Por favor, revise sus credenciales e intentelo de nuevo.',
                    });
                }).finally(() => {
                    setLoading(false);
                });
    }
    return (
        <div className='bg-T_COLOR h-screen w-screen flex items-center justify-around flex-col'>
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
                    type="email"
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
                    <Button type="primary" className='bg-S_COLOR' htmlType="submit" onClick={handleRegister}  loading={loading}>
                        Sign in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default SignIn