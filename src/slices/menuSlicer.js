// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    menu: 'Basic',
};

export const menuSlicer = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setMenu: (state, action) => {
            state.menu = action.payload;
        },
    },
});

export const { setMenu } = menuSlicer.actions;