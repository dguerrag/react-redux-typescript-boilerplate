import { Series } from '../../models/series.type';

export enum SeriesActionTypes {
	REQUEST_SERIES = '[Series] get series request',
	RECEIVE_SERIES = '[Series] get series response',
	REQUEST_SERIES_ID = '[Series] get series by id request',
	RECEIVE_SERIES_ID = '[Series] get series by id response',
	ADD_FAVORITE = '[Series] add movie to favorites',
	REMOVE_FAVORITE = '[Series] remove movie from favorites'
}

export type RequestSeries = {
	type: SeriesActionTypes.REQUEST_SERIES;
}

export type ReceiveSeries = {
	type: SeriesActionTypes.RECEIVE_SERIES;
	series: Series[];
}

export type RequestSeriesById = {
	type: SeriesActionTypes.REQUEST_SERIES_ID;
	id: number | string;
}

export type ReceiveSeriesById = {
	type: SeriesActionTypes.RECEIVE_SERIES_ID;
	serie: Series;
}

export type AddFavoriteSeries = {
	type: SeriesActionTypes.ADD_FAVORITE;
	id: number;
}

export type RemoveFavoriteSeries = {
	type: SeriesActionTypes.REMOVE_FAVORITE;
	id: number;
}

export type SeriesActions =
	RequestSeries |
	ReceiveSeries |
	RequestSeriesById |
	ReceiveSeriesById |
	AddFavoriteSeries |
	RemoveFavoriteSeries;

export const requestSeries = (): SeriesActions => ({type: SeriesActionTypes.REQUEST_SERIES});
export const receiveSeries = (series: Series[]): SeriesActions => ({type: SeriesActionTypes.RECEIVE_SERIES, series});
export const requestSeriesById = (id: string | number): SeriesActions => ({type: SeriesActionTypes.REQUEST_SERIES_ID, id});
export const receiveSeriesById = (serie: Series): SeriesActions => ({type: SeriesActionTypes.RECEIVE_SERIES_ID, serie});
export const addFavoriteSeries = (id: number): SeriesActions => ({type: SeriesActionTypes.ADD_FAVORITE, id});
export const removeFavoriteSeries = (id: number): SeriesActions => ({type: SeriesActionTypes.REMOVE_FAVORITE, id});