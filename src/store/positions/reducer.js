export const reducer = (state = [], { type, payload }) => {
	switch (type) {
		case 'add':
			return payload;
		default:
			return state;
	}
};
