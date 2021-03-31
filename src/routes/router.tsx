import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Routes } from './routes.types';
import { Movies } from '../modules/movies/movies';
import { MoviesDetail } from '../modules/movies/movies-detail';
import { Dashboard } from '../modules/dashboard/dashboard';
import { PublicRoute } from './public-route';
import { Error404 } from '../components/404/error-404';
import { SeriesLayout } from '../modules/series/series';
import { SeriesDetail } from '../modules/series/series-detail';
import { List } from '../modules/list/list';

export const Router = () => (
	<Switch>
		<Redirect from={Routes.ROUTE} to={Routes.DASHBOARD} exact/>
		<PublicRoute path={Routes.DASHBOARD} exact>
			<Dashboard/>
		</PublicRoute>
		<PublicRoute path={Routes.MOVIES} exact>
			<Movies/>
		</PublicRoute>
		<PublicRoute path={Routes.MOVIES_DETAILS} exact>
			<MoviesDetail/>
		</PublicRoute>
		<Route path={Routes.SERIES} exact>
			<SeriesLayout/>
		</Route>
		<PublicRoute path={Routes.SERIES_DETAILS} exact>
			<SeriesDetail/>
		</PublicRoute>
		<PublicRoute path={Routes.LIST} exact>
			<List/>
		</PublicRoute>
		<PublicRoute path={'*'}>
			<Error404/>
		</PublicRoute>
	</Switch>
);