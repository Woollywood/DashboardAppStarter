import { useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import { add } from '../filters/slice';
import { usePositions, useFetchPositions } from './hooks';

const JobList = () => {
	useFetchPositions();
	const positions = usePositions();
	const dispatch = useDispatch();

	const addFilterHandler = (filter) => {
		dispatch(add(filter));
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
