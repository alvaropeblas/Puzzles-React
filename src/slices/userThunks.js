// userThunks.js
import { setTarjetas, setUser } from './userSlice';
import { crearTarjeta, obtenerTarjetas, userByID, userLogin, userRegister } from '../service';

export const useLogin = (userData) => {
    return async (dispatch) => {
        try {
            const response = await userLogin(userData);
            dispatch(setUser({ user: response.user, token: response.token }));
            return response.status
        } catch (error) {
            console.error('Login failed:', error.message);
        }
    };
};

export const useUserById = (token) => {
    return async (dispatch) => {
        try {
            const response = await userByID(token);
            dispatch(setUser({ user: response.user, token: token}));
            return response.status
        } catch (error) {
            console.error('Login failed:', error.message);
        }
    };
};

export const useRegister = (userData) => {
    return async (dispatch) => {
        try {
            const user = await userRegister(userData);
        } catch (error) {
            console.error('Login failed:', error.message);
        }
    };
};

export const useCrearTarjeta = (userToken, tarjetaData) => {
    return async (dispatch) => {
        try {
            const response = await crearTarjeta(userToken, tarjetaData);
            return response.status
        } catch (error) {
            console.error('Login failed:', error.message);
        }
    };
};

export const useObtenerTarjeta = (userToken) => {
    return async (dispatch) => {
        try {
            const response = await obtenerTarjetas(userToken);
            dispatch(setTarjetas(response));
            return response.status
        } catch (error) {
            console.error('Login failed:', error.message);
        }
    };
};
