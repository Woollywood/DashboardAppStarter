export const addFilter = (filter) => ({
	type: 'addFilter',
	payload: filter,
});

export const removeFilter = (filter) => ({
	type: 'removeFilter',
	payload: filter,
});

export const clearFilters = {
	type: 'clearFilters',
};
