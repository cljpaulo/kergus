import { combineReducers } from '@reduxjs/toolkit';
import etapaAtualReducer from './Etapa-Atual/index';

const rootReducer = combineReducers({
    etapaAtual: etapaAtualReducer,
});

export default rootReducer;
