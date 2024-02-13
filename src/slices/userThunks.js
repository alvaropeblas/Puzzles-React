// userThunks.js
import { setUser } from './userSlice';
import { userLogin, userRegister } from '../service';

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


export const useRegister = (userData) => {
    return async (dispatch) => {
        try {
            const user = await userRegister(userData);
        } catch (error) {
            console.error('Login failed:', error.message);
        }
    };
};
