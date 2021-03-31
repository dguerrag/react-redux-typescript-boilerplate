import React, { useContext, useEffect } from 'react';
import styles from './dashboard.module.scss';
import { MovieActionTypes } from '../movies/movies.actions';
import { SeriesActionTypes } from '../series/series.actions';
import { ListActionTypes } from '../list/list.actions';
import { Fade } from '../../components/Fade';
import { ListItems } from '../../components/items-list/items-list';
import { SeriesContext, SeriesContextProvider } from '../series/series.context';
import { getSeries } from '../../api/series.api';
import { MoviesContext, MoviesContextProvider } from '../movies/movies.context';
import { getMovies } from '../../api/movies.api';
import { FavoritesContext, FavoritesContextProvider } from '../list/list.context';
import { getUserList } from '../../api/user-list.api';


const FavoriteListItems = () => {
	// get data from store and attach them to the state.
	const [{list}, dispatch] = useContext(FavoritesContext);
	console.log('FAVORITES');
	useEffect(() => {
		// fetch data on component first load
		getUserList().then(list => {
			dispatch({type: ListActionTypes.RECEIVE_LIST, list});
		});
	}, [dispatch]);
	return (
		!!list.length ? <ListItems title={'My List'} items={list}/> : <></>
	);
};

const MoviesListItems = () => {
	// get data from store and attach them to the state.
	const [{movies}, dispatch] = useContext(MoviesContext);
	console.log('MOVIES');
	useEffect(() => {
		// fetch data on component first load
		getMovies().then(movies => {
			dispatch({type: MovieActionTypes.RECEIVE_MOVIES, movies});
		});
	}, [dispatch]);

	return (
		<ListItems title={'Movies'} items={movies}/>
	);
};

const SeriesListItems = () => {
	// get data from store and attach them to the state.
	const [{series}, dispatch] = useContext(SeriesContext);
	console.log('SERIES');
	useEffect(() => {
		// fetch data on component first load
		getSeries().then(series => {
			dispatch({type: SeriesActionTypes.RECEIVE_SERIES, series});
		});
	}, [dispatch]);

	return (
		<ListItems title={'Series'} items={series}/>
	);
};

export const Dashboard = () => {
	return (
		<Fade time={1}
			  className={styles.container}>
			<FavoritesContextProvider>
				<FavoriteListItems/>
			</FavoritesContextProvider>
			<MoviesContextProvider>
				<MoviesListItems/>
			</MoviesContextProvider>
			<SeriesContextProvider>
				<SeriesListItems/>
			</SeriesContextProvider>

		</Fade>
	);
};