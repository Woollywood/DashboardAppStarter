import { combineReducers } from 'redux';
import { reducer as positionReducer } from './positions/reducer';
import { reducer as filterReducer } from './filters/reducer';

export const rootReducer = combineReducers({ positions: positionReducer, filters: filterReducer });
