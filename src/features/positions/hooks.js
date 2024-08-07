import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add as addPositions, selectVisible } from './slice';
import { selectFilters } from '../filters/slice';
import data from '../../mock/data.json';

export const usePositions = () => {
	const filters = useSelector(selectFilters);
	const positions = useSelector((state) => selectVisible(state, filters));

	return positions;
};

export const useFetchPositions = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(addPositions(data));
	}, [dispatch]);
};
