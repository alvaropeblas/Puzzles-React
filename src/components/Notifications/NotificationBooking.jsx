import React, { useState, useEffect } from 'react';
import { Button, notification } from 'antd';
import { Navigate } from 'react-router-dom';

const key = 'updatable';

const Notification = ({ fecha, nombre }) => {
    const [api, contextHolder] = notification.useNotification();
    const [notificationVisible, setNotificationVisible] = useState(false);
    const [redirectToHome, setRedirectToHome] = useState(false);



    const openNotification = () => {
        api.open({
            key,
            message: `Gracias ${nombre}`,
            description: `Su reserva para el día ${fecha} ha sido realizada correctamente`,
            onClose: () => {
                setNotificationVisible(false);
                setRedirectToHome(true);
            },
        });
        setNotificationVisible(true);
    };

    return (
        <>
            {contextHolder}
            <Button type="primary" className='bg-SECONDARY' onClick={openNotification}>
                Reservar
            </Button>

            {redirectToHome && (
                <Navigate to="/" replace={true} />
            )}
        </>
    );
};

export default Notification;
