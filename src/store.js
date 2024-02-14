import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './slices/userSlice'
import { bookingsSlice } from './slices/bookingsSlice'

export default configureStore({
    reducer: {
        user: userSlice.reducer,
        reservas: bookingsSlice.reducer,
    },
})