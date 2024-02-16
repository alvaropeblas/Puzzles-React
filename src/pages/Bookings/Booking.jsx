import { Calendar } from 'antd';
import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import FormUserAuth from '../../components/Forms/FormUserAuth';
import FormUserNoAuth from '../../components/Forms/FormUserNoAuth';
import { useObtenerFechas } from '../../slices/fechaThunk';
const Booking = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState(() => dayjs());
    const [selectedValue, setSelectedValue] = useState(() => dayjs());
    const [isVisible, setIsVisible] = useState(false);
    const [formIsVisible, setFormIsVisible] = useState(false);
    const { user, token } = useSelector((state) => state.user)
    const fechasDisponibles = useSelector((state) => state.fechas.fechasDisponibles);
    const [horasDisponibles, setHorasDisponibles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(useObtenerFechas())
        const timeoutId = setTimeout(() => {
            setIsVisible(true);
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timeoutId);
    }, []);
    const onSelect = (newValue) => {
        setValue(newValue);
        setSelectedValue(newValue);
        setFormIsVisible(true);
        const fechaSeleccionada = dayjs(newValue).format('YYYY-MM-DD');
        const horasDisponiblesParaFecha = fechasDisponibles
            .filter((fecha) => fecha.fecha === fechaSeleccionada)
            .map((fecha) => fecha.hora);

        setHorasDisponibles(horasDisponiblesParaFecha);

    };
    const onPanelChange = (newValue) => {
        setValue(newValue);
    };
    const disabledDate = (current) => {
        if (!fechasDisponibles) {
            return true;
        }
        const currentFormatted = dayjs(current).format('YYYY-MM-DD');
        const fechasDisponiblesEnFecha = fechasDisponibles.filter((fecha) =>
            fecha.fecha === currentFormatted
        );
        if (fechasDisponiblesEnFecha.length === 0) {
            return true;
        }
        const horasDisponiblesEnFecha = fechasDisponiblesEnFecha.map((fecha) => fecha.hora);
        const alMenosUnaHoraDisponible = horasDisponiblesEnFecha.some((hora) =>
            fechasDisponibles.some((fecha) => fecha.hora === hora)
        );
        return !alMenosUnaHoraDisponible;
    };

    return (
        <div className='bg-TERCIARY h-screen w-screen flex items-center justify-center'>
            <div className={`mb-4 text-center text-white ${isVisible && !formIsVisible ? '' : 'hidden'}`}>
                <p className='text-black font-lilita font-bold'>Seleccione la fecha deseada</p>
            </div>
            <div className={`ml-10 w-[30%] transition-transform duration-1000 ${loading ? 'skeleton-loading' : ''}`}>
                {loading ? (
                    
                    <div className=' ml-16 w-[400px] h-[300px] bg-slate-400 animate-pulse  rounded'>

                    </div>
                ) : (
                    <Calendar value={value} onSelect={onSelect} onPanelChange={onPanelChange} fullscreen={false} disabledDate={disabledDate} />
                )}
            </div>
            {formIsVisible && (
                <div className='w-[40%] mt-10'>
                    {token ? <FormUserAuth selectedValue={selectedValue} horasDisponibles={horasDisponibles} /> : <FormUserNoAuth selectedValue={selectedValue} horasDisponibles={horasDisponibles} />}
                </div>
            )}
        </div>
    )
}

export default Booking