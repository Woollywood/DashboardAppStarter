import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { reducer as filterReducer } from './features/filters/slice';
import { reducer as positionsReducer } from './features/positions/slice';

const rootReducer = combineReducers({ positions: positionsReducer, filters: filterReducer });

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['filters'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	devTools: true,
});

export const persistor = persistStore(store);
