import { configureStore } from "@reduxjs/toolkit";
import selectedReducer from "../slices/selectedSlice"
import productsReducer from "../slices/productsSlice"

/**
 * Хранилище состояний приложения
 */

const store = configureStore({
    reducer: {
        products: productsReducer,
        selected: selectedReducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
