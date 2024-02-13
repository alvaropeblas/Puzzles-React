import { Alert, Button, Calendar, Input } from 'antd';
import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import Notification from '../../components/Notifications/NotificationBooking';
import { useSelector } from 'react-redux';

const Booking = () => {
    const [value, setValue] = useState(() => dayjs('2024-02-25'));
    const [selectedValue, setSelectedValue] = useState(() => dayjs('2024-02-25'));
    const [isVisible, setIsVisible] = useState(false);
    const [formIsVisible, setFormIsVisible] = useState(false);
    const [nombre, setNombre] = useState('');
    const { user } = useSelector((state) => state.user)

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

    return (
        <div className='bg-TERCIARY h-screen w-screen flex items-center justify-around '>
            <div className={`w-[30%] transition-transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-x-[-2em] opacity-0'}`}>
                <Calendar value={value} onSelect={onSelect} onPanelChange={onPanelChange} fullscreen={false} />
            </div>
            <div className={`w-[15%] transition-transform ${formIsVisible ? 'translate-y-0 opacity-100' : 'translate-x-[-4em] opacity-0'}`}>
                <label htmlFor="nombre" className='font-lilita'>Nombre:</label>
                <Input id='nombre' placeholder="nombre" className='mb-[2em]' value={nombre}
                    onChange={(e) => setNombre(e.target.value)} allowClear />
                <label htmlFor="apellidos" className='font-lilita'>Apellidos:</label>
                <Input id='apellidos' placeholder="apellidos" className='mb-[2em]' allowClear />
                <label htmlFor="email" className='font-lilita'>Email:</label>
                <Input id='email' type='email' placeholder="email" className='mb-[2em]' allowClear />
                <Notification nombre={nombre} fecha={selectedValue} />
            </div>
        </div>
    )
}

export default Booking