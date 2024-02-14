import React, { useEffect } from 'react';
import { useObtenerReserva } from '../../slices/bookingsThunks';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Space, Table } from 'antd';

const MyBookings = () => {
    const { token } = useSelector((state) => state.user);
    const { reservas } = useSelector((state) => state.reservas);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(useObtenerReserva(token));
    }, []);
    const columns = [
        {
            title: 'Fecha',
            dataIndex: 'fecha',
            key: 'fecha',
        },
        {
            title: 'Hora',
            dataIndex: 'hora',
            key: 'hora',
        },
        {
            title: 'Menu',
            dataIndex: 'menu',
            key: 'menu',
        },
        {
            title: 'Nº Personas',
            dataIndex: 'n_personas',
            key: 'n_personas',
        },

        {
            title: 'Action',
            key: 'action',
            render: () => (
                <Space size="middle">
                    <Button>Cancelar</Button>
                </Space>
            ),
        },
    ];


    return (
        <div className='bg-TERCIARY h-screen w-screen flex items-center justify-around '>
            {reservas && reservas?.length > 0 ? (

                <Table columns={columns} dataSource={reservas} />

            ) : (
                <div className=''>
                    <p className='mb-8'>No bookings available</p>
                    <Link to='/booking' >
                        <Button type="primary" className='bg-SECONDARY'>
                            Hacer una reserva
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default MyBookings;
