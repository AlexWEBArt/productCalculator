import { createSlice } from "@reduxjs/toolkit";
import { Products, productsList } from "../thunks/productsListThunk";

type ProductsState = {
    products: Products[];
    loading: boolean;
    error: string;
}

const initialState: ProductsState = {
    products: [],
    loading: false,
    error: '',
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        builder
            .addCase(productsList.pending, (state) => {
                state.loading = true;
            })
            .addCase(productsList.fulfilled, (state, action) => {
                state.products = action.payload;
                state.loading = false;
                state.error = '';
            })
            .addCase(productsList.rejected, (state, action) => {
                if (action.payload) {
                    state.loading = false;
                    state.error = action.payload;
                }
            })
    },
})

export default productsSlice.reducer;