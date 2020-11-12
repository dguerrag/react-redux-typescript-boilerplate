import { createBrowserHistory, History } from 'history';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import moviesSagas from '../modules/movies/store/movies.sagas';
import { moviesReducer, MoviesStateType } from '../modules/movies/store/movies.reducer';
import { seriesReducer, SeriesStateType } from '../modules/series/store/series.reducer';
import seriesSagas from '../modules/series/store/series.sagas';
import { listReducer, ListStateType } from '../modules/list/store/list.reducer';
import listSagas from '../modules/list/store/list.sagas';

export const history = createBrowserHistory();

export type State = {
	router: History;
	moviesReducer: MoviesStateType;
	seriesReducer: SeriesStateType;
	listReducer: ListStateType;
}

export const reducers = combineReducers({
	router: connectRouter(history),
	moviesReducer,
	seriesReducer,
	listReducer
});

export const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
	yield all([
		moviesSagas(),
		seriesSagas(),
		listSagas()
	]);
}

export default createStore(reducers, composeWithDevTools(
	compose(
		applyMiddleware(
			sagaMiddleware,
			routerMiddleware(history) // for dispatching history actions
		)
	)));

sagaMiddleware.run(rootSaga);
