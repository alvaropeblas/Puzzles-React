import React, { useEffect } from 'react';
import { useObtenerReserva } from '../../slices/bookingsThunks';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const MyBookings = () => {
    const { token } = useSelector((state) => state.user);
    const { reservas } = useSelector((state) => state.reservas);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(useObtenerReserva(token));
    }, []);

    return (
        <div className='bg-TERCIARY h-screen w-screen flex items-center justify-around '>
            {reservas && reservas.length > 0 ? (
                reservas.map((reserva) => (
                    <div key={reserva.id}>
                        <p>{reserva.fecha}</p>
                        {/* Add other reserva details as needed */}
                    </div>
                ))
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
