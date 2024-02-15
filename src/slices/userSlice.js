// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: null,
    tarjetas: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        clearUser: (state) => {
            state.user = null;
            state.token = null;
        },
        setTarjetas: (state, action) => {
            state.tarjetas = action.payload.tarjeta;
        }
    },
});

export const { setUser, clearUser, setTarjetas } = userSlice.actions;
