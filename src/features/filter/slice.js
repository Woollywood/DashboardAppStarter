import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
	name: 'filters',
	initialState: [],
	reducers: {
		add: (state, { payload }) => {
			if (!state.includes(payload)) {
				state.push(payload);
			}
		},
		remove: (state, { payload }) => state.filter((filter) => filter !== payload),
		clear: () => [],
	},
});

export const { add, remove, clear } = slice.actions;
export const reducer = slice.reducer;
export const selectFilters = (state) => state.filters;
