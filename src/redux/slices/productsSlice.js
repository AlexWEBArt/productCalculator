import { createSlice } from "@reduxjs/toolkit";
import { productsList } from "../thunks/productsListThunk";

const initialState = {
    products: [],
    loading: false,
    error: '',
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(productsList.pending, (state, action) => {
                return {
                    ...state,
                    loading: true
                }
            })
            .addCase(productsList.fulfilled, (state, action) => {
                return {
                    error: '',
                    products: action.payload,
                    loading: false
                }
            })
            .addCase(productsList.rejected, (state, action) => {
                return {
                    ...state,
                    error: action.payload,
                    loading: false
                }
            })
    },
})

export default productsSlice.reducer;