import React, { useEffect } from 'react';
import { useBorrarReserva, useObtenerReserva } from '../../slices/bookingsThunks';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Popconfirm, Space, Table } from 'antd';

const MyBookings = () => {
    const { token } = useSelector((state) => state.user);
    const { reservas } = useSelector((state) => state.reservas);
    const dispatch = useDispatch();
    const handleBorrarReserva = (idReserva) => {
        dispatch(useBorrarReserva(token, idReserva))
        dispatch(useObtenerReserva(token));
    }

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
            title: 'Cancelar',
            key: 'cancelar',
            render: (record) => (
                <Space size="middle">
                    <Popconfirm
                        title="¿Estás seguro de cancelar esta reserva?"
                        onConfirm={() => handleBorrarReserva(record.id)}
                        okText="Sí"
                        cancelText="No"
                    >
                        <Button >Cancelar</Button>
                    </Popconfirm>
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
                    <Link to="/puzzles-front/booking" >
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
