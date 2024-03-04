import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    baseLine: null,
    options: [],
    request: null,
}

const selectedSlice = createSlice({
    name: 'selected',
    initialState,
    reducers: {
        selectBaseLine(state, action) {
            state.baseLine = action.payload;
        },
        selectOption(state, action) {
            state.options.push(action.payload)
        },
        unSelectOption(state, action) {
            state.options = current(state).options.filter(option => option.id !== action.payload.id)
        },
        addValue(state, action) {
            state.options = current(state).options.map(option => {
                if (option.id === action.payload.id && action.payload.discount >=0) {
                    return {
                        ...option,
                        discount: action.payload.discount,
                    }
                }
                if (option.id === action.payload.id && action.payload.quantity) {
                    return {
                        ...option,
                        quantity: action.payload.quantity
                    }
                }
                return option
            })
        },
        sendRequst(state, action) {
            state.request = action.payload
        }
    }
})

export const { selectBaseLine, selectOption, selectUsageBased, unSelectOption, addValue, sendRequst } = selectedSlice.actions;
export default selectedSlice.reducer;