import { configureStore } from "@reduxjs/toolkit";
import selectedReducer from "../slices/selectedSlice"
import productsReducer from "../slices/productsSlice"

const store = configureStore({
    reducer: {
        products: productsReducer,
        selected: selectedReducer
    }
})

export default store