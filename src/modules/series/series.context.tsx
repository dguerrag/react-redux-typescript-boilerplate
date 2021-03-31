import { Series } from '../../models/series.type';
import { SeriesActions, SeriesActionTypes } from './series.actions';
import React, { createContext, useReducer } from 'react';

export type SeriesStateType = {
	series: Series[];
	serie: Series | null;
	[favorite: number]: boolean;
}

const seriesInitialState: any = {
	series: [],
	serie: null
};

export const seriesReducer = (state: SeriesStateType, action: SeriesActions): SeriesStateType => {
	switch (action.type) {
		case SeriesActionTypes.RECEIVE_SERIES:
			return {...state, series: action.series};
		case SeriesActionTypes.RECEIVE_SERIES_ID:
			return {...state, serie: action.serie};
		case SeriesActionTypes.ADD_FAVORITE:
			return {...state, [action.id]: true};
		case SeriesActionTypes.REMOVE_FAVORITE:
			return {
				...state, [action.id]: false
			};
		default:
			return state;
	}
};

export const SeriesContext = createContext<[SeriesStateType, Function]>(seriesInitialState);

export const SeriesContextProvider = ({children}: any) => (
	<SeriesContext.Provider value={useReducer(seriesReducer, seriesInitialState)}>
		{children}
	</SeriesContext.Provider>
);
