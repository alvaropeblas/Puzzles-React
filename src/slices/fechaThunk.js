// userThunks.js
import { setFechas } from './fechaSlice';
import { obtenerFechas } from '../service';

export const useObtenerFechas = () => {
    return async (dispatch) => {
        try {
            const response = await obtenerFechas();
            dispatch(setFechas(response));
            return response.status
        } catch (error) {
            console.error('Login failed:', error.message);
        }
    };
};