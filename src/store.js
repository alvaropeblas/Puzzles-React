import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './slices/userSlice'
import { bookingsSlice } from './slices/bookingsSlice'
import { fechaSlice } from './slices/fechaSlice'
import { menuSlicer } from './slices/menuSlicer'

export default configureStore({
    reducer: {
        user: userSlice.reducer,
        reservas: bookingsSlice.reducer,
        fechas: fechaSlice.reducer,
        menu: menuSlicer.reducer,
    },
})