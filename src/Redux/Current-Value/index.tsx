import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrentValueState {
    id: string;
    type: string;
    description: string;
    value: string;
}

const currentValueSlice = createSlice({
    name: 'currentValue',
    initialState: {
        id: '',
        type: '',
        description: '',
        value: '',
    } as CurrentValueState,
    reducers: {
        setCurrentValue: (state, action: PayloadAction<Partial<CurrentValueState>>) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { setCurrentValue } = currentValueSlice.actions;
export default currentValueSlice.reducer;
