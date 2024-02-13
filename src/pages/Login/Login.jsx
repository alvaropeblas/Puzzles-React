import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input, notification } from 'antd';
import logo from '../../assets/Logo.png';
import { useLogin } from '../../slices/userThunks';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const { userAuth } = useSelector((state) => state.user);

    const handleOnChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleOnChangePass = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async () => {
        const user = {
            email: email,
            password: password,
        };

        try {
            await dispatch(useLogin(user));

            if (userAuth) {
                notification.success({
                    message: `Welcome back!`,
                    description: 'We hope you enjoy your experience.',
                });
                navigate('/');
            } else {
                notification.error({
                    message: 'Login failed',
                    description: 'Please check your email and password and try again.',
                });
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };
    useEffect(() => {
        if (userAuth) {
            notification.success({
                message: `Welcome back!`,
                description: 'We hope you enjoy your experience.',
            });
            navigate('/');
        }
    }, [userAuth])

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
                onFinish={() => { }}
                onFinishFailed={() => { }}
                autoComplete="off"
            >
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
                    <Button type="primary" className='bg-SECONDARY' htmlType="submit" onClick={handleLogin}>
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;
