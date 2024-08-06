export const reducer = (state = [], { type, payload }) => {
	switch (type) {
		case 'addFilter':
			if (!state.includes(payload)) {
				return [...state, payload];
			}
			return state;
		case 'removeFilter':
			return state.filter((filter) => filter !== payload);
		case 'clearFilters':
			return [];
		default:
			return state;
	}
};
