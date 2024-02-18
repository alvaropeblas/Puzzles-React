import React, { useEffect, useState } from 'react';
import { useBorrarReserva, useObtenerReserva } from '../../slices/bookingsThunks';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Popconfirm, Space, Table, notification } from 'antd';

const MyBookings = () => {
    const { token } = useSelector((state) => state.user);
    const { reservas } = useSelector((state) => state.reservas);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const handleBorrarReserva = (idReserva) => {
        dispatch(useBorrarReserva(token, idReserva))
        dispatch(useObtenerReserva(token));
        notification.success({
            message: 'Reserva eliminada correctamente',
            placement: 'bottomRight',
        });
    }


    useEffect(() => {
        const fetchData = async () => {
            await dispatch(useObtenerReserva(token));
            setLoading(false);
        };

        fetchData();


    }, [dispatch]);

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
        <div className='bg-T_COLOR h-screen w-screen flex items-center justify-around '>
            {loading ? (
                <div className=' flex justify-center items-center w-[400px] h-[200px] bg-slate-400 animate-pulse'>
                    <p className='text-white animate-pulse font-lilita font-semibold'>Buscando tus reservas</p>
                </div>
            ) : (
                reservas?.length > 0 ? (
                    <Table columns={columns} dataSource={reservas} pagination={{ pageSize: 3 }} />
                ) : (
                    <div className=''>
                        <p className='mb-8'>No bookings available</p>
                        <Link to="/puzzles-front/booking">
                            <Button type="primary" className='bg-S_COLOR'>
                                Hacer una reserva
                            </Button>
                        </Link>
                    </div>
                )
            )}
        </div>
    );
};

export default MyBookings;
