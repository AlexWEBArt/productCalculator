import { createAsyncThunk } from "@reduxjs/toolkit";
import * as products from '../../data/mockUpBackend.json'

export const productsList = createAsyncThunk('products', async (params, { rejectWithValue }) => {
    // const response = await fetch(`url get request`);

    await new Promise(resolve => setTimeout(resolve, 1000));

    const response = products.default;

    if (!response) {
        return rejectWithValue('Что-то пошло не так. Попробуйте перезагрузить страницу.')
    }

    return response
})