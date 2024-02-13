// userThunks.js
import { setUser } from './userSlice';
import { userLogin, userRegister } from '../service';

export const useLogin = (userData) => {
    return async (dispatch) => {
        try {
            const user = await userLogin(userData);
            dispatch(setUser({ user: user.user, token: user.token }));
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
