import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
	name: 'positions',
	initialState: [],
	reducers: {
		add: (_, { payload }) => payload,
	},
});

export const { add } = slice.actions;
export const reducer = slice.reducer;

export const selectAll = (state) => state.positions;
export const selectVisible = (state, filters = []) => {
	if (filters.length === 0) {
		return state.positions;
	}

	return state.positions.filter((pos) => {
		const posFilters = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools);
		return filters.every((filter) => posFilters.includes(filter));
	});
};
