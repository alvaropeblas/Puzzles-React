import { Alert, Button, Calendar, Form, Input, Select, notification } from 'antd';
import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import { useCrearReserva } from '../../slices/bookingsThunks';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormUserAuth from '../../components/Forms/FormUserAuth';
import FormUserNoAuth from '../../components/Forms/FormUserNoAuth';
const Booking = () => {
    const [value, setValue] = useState(() => dayjs('2024-02-25'));
    const [selectedValue, setSelectedValue] = useState(() => dayjs('2024-02-25'));
    const [isVisible, setIsVisible] = useState(false);
    const [formIsVisible, setFormIsVisible] = useState(false);
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
            <div className={`w-[20%] transition-transform ${formIsVisible ? 'translate-y-0 opacity-100' : 'translate-x-[-4em] opacity-0'}`}>
                {user ? <FormUserAuth selectedValue={selectedValue} /> : <FormUserNoAuth selectedValue={selectedValue} />}
            </div>
        </div>
    )
}

export default Booking