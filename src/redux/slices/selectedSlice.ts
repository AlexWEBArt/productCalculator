import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

type DisabledOptionsID = {
    id: string;
    title?: string;
}

type Limits = {
    max: string;
    min: string;
    step: string;
}

export type Option = {
    id: string;
    service_element: string;
    title: string;
    unit: string;
    charge_type: string;
    price: string;
    min_price: string;
    currency: string;
    max_discount: string;

    disabledForBaseLine?: DisabledOptionsID[];
    limits?: Limits;
    discount?: string;
    quantity?: string;
}

export type Request = {
    id: string;
    quantity: string;
    title: string;
    discount: string;
    price: string;
};

type DataCO = {
    InputCompanyName: string;
    DatePicker: string;
    InputOperatorName: string;
}

type OptionsState = {
    baseOption: Option | null,
    options: Option[],
    request: Request | null,
    showModal: boolean,
    dataCO: DataCO | null,
}

const initialState: OptionsState = {
    baseOption: null,
    options: [],
    request: null,
    showModal: false,
    dataCO: null,
}

const selectedSlice = createSlice({
    name: 'selected',
    initialState,
    reducers: {
        selectBaseOption(state, action: PayloadAction<Option>) {
            state.baseOption = action.payload;
        },
        addDiscountBaseOption(state, action: PayloadAction<string>) {
            if (state.baseOption) {
                state.baseOption = {
                    ...state.baseOption,
                    discount: action.payload
                }
            }
        },
        selectOption(state, action: PayloadAction<Option>) {
            state.options.push(action.payload)
        },
        unSelectOption(state, action: PayloadAction<Option>) {
            state.options = current(state).options.filter(option => option.id !== action.payload.id)
        },
        addValue(state, action: PayloadAction<Option>) {
            state.options = current(state).options.map(option => {
                if (!action.payload.discount) return option
                if (option.id === action.payload.id && action.payload.discount >= '0') {
                    return {
                        ...option,
                        discount: action.payload.discount,
                    }
                }

                if (!action.payload.quantity) return option
                if (option.id === action.payload.id && action.payload.quantity) {
                    return {
                        ...option,
                        quantity: action.payload.quantity
                    }
                }
                return option
            })
        },
        sendRequst(state, action: PayloadAction<Request>) {
            state.request = action.payload
        },
        showModal(state, action: PayloadAction<boolean>) {
            state.showModal = action.payload
        },
        formForCO(state, action: PayloadAction<DataCO>) {
            state.dataCO = action.payload
        }
    }
})

export const { selectBaseOption, addDiscountBaseOption, selectOption, unSelectOption, addValue, sendRequst, showModal, formForCO } = selectedSlice.actions;
export default selectedSlice.reducer;