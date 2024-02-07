import { combineReducers } from '@reduxjs/toolkit';
import currentStageReducer from './Current-Stage/index';
import currentValueReducer from './Current-Value/index';

const rootReducer = combineReducers({
    currentStage: currentStageReducer,
    currentValue: currentValueReducer,
});

export default rootReducer;
