import { createAsyncThunk } from "@reduxjs/toolkit";
import products from '../../data/mockUpBackend.json'
import { Option } from "../slices/selectedSlice";

type Service = {
    serviceName: string;
    baseOptions?: Option[];
    options: Option[];
}

export type Products = {
    product: string;
    services: Service[];
}

const services: Products[] = (products as Products[]); 

export const productsList = createAsyncThunk<Products[], undefined, { rejectValue: string }>('products', async (_, { rejectWithValue }) => {
    // const response = await fetch(`url get request`);

    await new Promise<void>(resolve => setTimeout(resolve, 1000));

    let response

    if (Math.random() > 0.8) {
        response = null;
    } else {
        response = services;
    }

    if (!response) {
        return rejectWithValue('Что-то пошло не так. Попробуйте перезагрузить страницу.')
    }

    return response
})