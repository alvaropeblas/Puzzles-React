// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    reservas: null,
};

export const bookingsSlice = createSlice({
    name: 'reservas',
    initialState,
    reducers: {
        setReserva: (state, action) => {
            state.reservas = action.payload;
        },
        getReserva: (state) => {
            return state.reservas
        },
    },
});

export const { setReserva, getReserva } = bookingsSlice.actions;