import { useSelector, useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectVisible } from 'store/positions/selectors';
import { addFilter } from 'store/filters/actions';
import { selectFilters } from 'store/filters/selectors';

const JobList = () => {
	const filters = useSelector(selectFilters);
	const positions = useSelector((state) => selectVisible(state, filters));
	const dispatch = useDispatch();

	const addFilterHandler = (filter) => {
		dispatch(addFilter(filter));
	};

	return (
		<div className='job-list'>
			{positions.map((item) => (
				<JobPosition key={item.id} {...item} addFilterHandler={addFilterHandler} />
			))}
		</div>
	);
};

export { JobList };
