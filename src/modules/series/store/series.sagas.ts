import { call, put, select, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { seriesSelector } from './series.reducer';
import { getSeries, getSeriesById } from '../../../api/series.api';
import { receiveSeries, receiveSeriesById, RequestSeriesById, SeriesActionTypes } from './series.actions';
import { Series } from '../../../models/series.type';

function* requestSeriesEffect(): SagaIterator {
	try {
		const series = yield call(getSeries);
		yield put(receiveSeries(series));
	} catch (e) {
		console.error(e);
	}
}

function* requestSeriesById(action: RequestSeriesById): SagaIterator {
	try {
		const {id} = action;
		const series = yield select(seriesSelector);
		const serie = !!series.length
			? series.find((serie: Series) => serie.id === id)
			: yield call(getSeriesById, id);
		yield put(receiveSeriesById(serie));
	} catch (e) {
		console.error(e);
	}
}

function* seriesSagas() {
	yield takeLatest(SeriesActionTypes.REQUEST_SERIES, requestSeriesEffect);
	yield takeLatest(SeriesActionTypes.REQUEST_SERIES_ID, requestSeriesById);
}

export default seriesSagas;