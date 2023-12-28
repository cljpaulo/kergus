import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const etapaAtualSlice = createSlice({
    name: 'etapaAtual',
    initialState: '',
    reducers: {
        etapaAtual: (state, action: PayloadAction<string>) => action.payload,
    },
});

export const { etapaAtual } = etapaAtualSlice.actions;
export default etapaAtualSlice.reducer;
