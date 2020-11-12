import { call, put, select, takeLatest } from 'redux-saga/effects';
import { MovieActionTypes, receiveMovieById, receiveMovies } from './movies.actions';
import { SagaIterator } from '@redux-saga/core';
import { getMovieById, getMovies } from '../../../api/movies.api';
import { moviesSelector } from './movies.reducer';
import { Movie } from '../../../models/movie.type';

function* requestMoviesEffect(): SagaIterator {
	try {
		const movies = yield call(getMovies);
		yield put(receiveMovies(movies));
	} catch (e) {
		console.error(e);
	}
}

function* requestMovieById(action: any): SagaIterator {
	try {
		const {id} = action;
		const movies = yield select(moviesSelector);
		const movie = !!movies.length
			? movies.find((movie: Movie) => movie.id === id)
			: yield call(getMovieById, id);
		yield put(receiveMovieById(movie));
	} catch (e) {
		console.error(e);
	}
}

function* moviesSagas() {
	yield takeLatest(MovieActionTypes.REQUEST_MOVIES, requestMoviesEffect);
	yield takeLatest(MovieActionTypes.REQUEST_MOVIE_ID, requestMovieById);
}

export default moviesSagas;