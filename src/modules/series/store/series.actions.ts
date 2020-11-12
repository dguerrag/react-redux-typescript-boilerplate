import { Series } from '../../../models/series.type';

export enum SeriesActionTypes {
	REQUEST_SERIES = '[Series] get series request',
	RECEIVE_SERIES = '[Series] get series response',
	REQUEST_SERIES_ID = '[Series] get series by id request',
	RECEIVE_SERIES_ID = '[Series] get series by id response'
}

type RequestSeries = {
	type: SeriesActionTypes.REQUEST_SERIES;
}

type ReceiveSeries = {
	type: SeriesActionTypes.RECEIVE_SERIES;
	series: Series[];
}

export type RequestSeriesById = {
	type: SeriesActionTypes.REQUEST_SERIES_ID;
	id: number | string;
}

type ReceiveSeriesById = {
	type: SeriesActionTypes.RECEIVE_SERIES_ID;
	serie: Series;
}

export type SeriesActions = RequestSeries | ReceiveSeries | RequestSeriesById | ReceiveSeriesById;

export const requestSeries = (): SeriesActions => ({type: SeriesActionTypes.REQUEST_SERIES});
export const receiveSeries = (series: Series[]): SeriesActions => ({type: SeriesActionTypes.RECEIVE_SERIES, series});
export const requestSeriesById = (id: string | number): SeriesActions => ({type: SeriesActionTypes.REQUEST_SERIES_ID, id});
export const receiveSeriesById = (serie: Series): SeriesActions => ({type: SeriesActionTypes.RECEIVE_SERIES_ID, serie});