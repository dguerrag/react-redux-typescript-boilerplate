import { SeriesActions, SeriesActionTypes } from './series.actions';
import { useSelector } from 'react-redux';
import { State } from '../../../store/store';
import { Series } from '../../../models/series.type';

export type SeriesStateType = {
	series: Series[];
	serie: Series | null;
}

const seriesInitialState: SeriesStateType = {
	series: [],
	serie: null
};

export const seriesReducer = (state = seriesInitialState, action: SeriesActions): SeriesStateType => {
	switch (action.type) {
		case SeriesActionTypes.RECEIVE_SERIES:
			return {...state, series: action.series};
		case SeriesActionTypes.RECEIVE_SERIES_ID:
			return {...state, serie: action.serie};
		default:
			return state;
	}
};

export const seriesSelector = (state: State) => state.seriesReducer.series;
export const useSeriesReducerSeries = () => useSelector(seriesSelector);
export const useSeriesReducerSelectedSeries = () => useSelector((state: State) => state.seriesReducer.serie);

