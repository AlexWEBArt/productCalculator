import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    baseOption: null,
    options: [],
    request: null,
    showModal: false,
}

const selectedSlice = createSlice({
    name: 'selected',
    initialState,
    reducers: {
        selectBaseOption(state, action) {
            state.baseOption = action.payload;
        },
        addDiscountBaseOption(state, action) {
            state.baseOption = {
                ...current(state).baseOption,
                discount: action.payload
            }
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
        },
        showModal(state, action) {
            state.showModal = action.payload
        }
    }
})

export const { selectBaseOption, addDiscountBaseOption, selectOption, selectUsageBased, unSelectOption, addValue, sendRequst, showModal } = selectedSlice.actions;
export default selectedSlice.reducer;