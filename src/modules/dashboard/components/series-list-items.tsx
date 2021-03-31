import React from 'react';
import { useSeriesReducerSeries } from '../../series/store/series.reducer';
import { ListItems } from '../../../components/items-list/items-list';

export const SeriesListItems = () => {
	// get data from store and attach them to the state.
	const series = useSeriesReducerSeries();
	return (
		<ListItems title={'Series'} items={series}/>
	)
}