// fechaSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const fechaSlice = createSlice({
    name: 'fechas',
    initialState: {
        fechasDisponibles: null,
        horasDisponibles: null,
    },
    reducers: {
        setFechas: (state, action) => {
            console.log(action.payload);
            state.fechasDisponibles = action.payload;
        },
        setHoras: (state, action) => {
            state.horasDisponibles = action.payload;
        },
    },
});

export const { setFechas, setHoras } = fechaSlice.actions;

