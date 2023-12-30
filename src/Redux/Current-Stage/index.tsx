import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const currentStageSlice = createSlice({
    name: 'currentStage',
    initialState: '',
    reducers: {
        currentStage: (state, action: PayloadAction<string>) => action.payload,
    },
});

export const { currentStage } = currentStageSlice.actions;
export default currentStageSlice.reducer;
