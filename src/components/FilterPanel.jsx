import { useSelector, useDispatch } from 'react-redux';
import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import { selectFilters } from 'store/filters/selectors';
import { removeFilter, clearFilters } from 'store/filters/actions';

const FilterPanel = () => {
	const currentFilters = useSelector(selectFilters);
	const dispatch = useDispatch();

	if (currentFilters.length === 0) {
		return null;
	}

	const removeFilterHandler = (filter) => {
		dispatch(removeFilter(filter));
	};

	return (
		<Card className='filter-panel'>
			<div className='filter-panel-wrapper'>
				<Stack>
					{currentFilters.map((filter) => (
						<Badge variant='clearable' key={filter} onClear={() => removeFilterHandler(filter)}>
							{filter}
						</Badge>
					))}
				</Stack>

				<button className='link' onClick={() => dispatch(clearFilters)}>
					Clear
				</button>
			</div>
		</Card>
	);
};

export { FilterPanel };
