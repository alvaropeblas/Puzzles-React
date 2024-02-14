// userThunks.js
import { setReserva } from './bookingsSlice';
import { obtenerReservas, crearReserva, borrarReserva, crearReservaOut } from '../service';

export const useCrearReserva = (token, reservaData) => {
    return async (dispatch) => {
        try {
            const response = await crearReserva(token, reservaData);
            return response.status
        } catch (error) {
            console.error('Login failed:', error.message);
        }
    };
};
export const useCrearReservaOut = (reservaData) => {
    return async (dispatch) => {
        try {
            const response = await crearReservaOut(reservaData);
            return response.status
        } catch (error) {
            console.error('Login failed:', error.message);
        }
    };
};
export const useObtenerReserva = (token) => {
    return async (dispatch) => {
        try {
            const response = await obtenerReservas(token);
            dispatch(setReserva(response));
            return response
        } catch (error) {
            console.error('Request reserva failed:', error.message);
        }
    };
};

export const useBorrarReserva = (token, idReserva) => {
    return async (dispatch) => {
        try {
            const response = await borrarReserva(token, idReserva);
/*             dispatch(setReserva(response));
 */            return response
        } catch (error) {
            console.error('Request reserva failed:', error.message);
        }
    };
};
