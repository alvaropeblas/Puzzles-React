import React from 'react';
import { Button, Checkbox, Form, Input, notification } from 'antd';
import logo from '../../../public/images/Logo.png'
import { useLogin } from '../../slices/userThunks';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onFinish = async (values) => {
        const user = {
            email: values.email,
            password: values.password,
        };
        try {
            dispatch(useLogin(user))
                .then(response => {
                    if (response) {
                        navigate('/puzzles-front/')
                        notification.success({
                            message: `Binevenido de nuevo!`,
                            description: 'Disfute de la experiencia.',
                        });
                        return
                    }
                    notification.error({
                        message: 'Login erroneo',
                        description: 'Por favor, revise sus credenciales e intentelo de nuevo.',
                    });
                });
        } catch (error) {
            console.error('Error during login:', error);
        }
    };


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
                onFinishFailed={(errorInfo) => {
                    console.log('Failed:', errorInfo);

                }}
                autoComplete="on"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor, introduzca su correo!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor, introduzca su contraseña!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" className='bg-SECONDARY' htmlType="submit" >
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;
