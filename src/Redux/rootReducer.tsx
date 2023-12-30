import { combineReducers } from '@reduxjs/toolkit';
import currentStageReducer from './Current-Stage/index';

const rootReducer = combineReducers({
    currentStage: currentStageReducer,
});

export default rootReducer;
