import { Calendar } from 'antd';
import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import FormUserAuth from '../../components/Forms/FormUserAuth';
import FormUserNoAuth from '../../components/Forms/FormUserNoAuth';
import { useObtenerFechas } from '../../slices/fechaThunk';
const Booking = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState(() => dayjs('2024-02-25'));
    const [selectedValue, setSelectedValue] = useState(() => dayjs('2024-02-25'));
    const [isVisible, setIsVisible] = useState(false);
    const [formIsVisible, setFormIsVisible] = useState(false);
    const { user } = useSelector((state) => state.user)
    const fechasDisponibles = useSelector((state) => state.fechas.fechasDisponibles);
    const [horasDisponibles, setHorasDisponibles] = useState([]);


    useEffect(() => {
        dispatch(useObtenerFechas())
        const timeoutId = setTimeout(() => {
            setIsVisible(true);
        }, 500);

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
        <div className='bg-TERCIARY h-screen w-screen flex items-center justify-around '>
            <div className={`w-[30%] transition-transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-x-[-2em] opacity-0'}`}>
                <Calendar value={value} onSelect={onSelect} onPanelChange={onPanelChange} fullscreen={false} disabledDate={disabledDate} />
            </div>
            <div className={`w-[20%] transition-transform ${formIsVisible ? 'translate-y-0 opacity-100' : 'translate-x-[-4em] opacity-0'}`}>
                {user ? <FormUserAuth selectedValue={selectedValue} horasDisponibles={horasDisponibles} /> : <FormUserNoAuth selectedValue={selectedValue} horasDisponibles={horasDisponibles} />}
            </div>
        </div>
    )
}

export default Booking