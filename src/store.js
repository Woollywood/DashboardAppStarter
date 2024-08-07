import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { reducer as filterReducer } from './features/filter/slice';
import { reducer as positionsReducer } from './features/positions/slice';

const rootReducer = combineReducers(filterReducer, positionsReducer);

export const store = configureStore({
	reducer: {
		positions: positionsReducer,
		filters: filterReducer,
	},
	devTools: true,
});
