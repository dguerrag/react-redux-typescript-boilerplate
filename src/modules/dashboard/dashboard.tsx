import React, { useEffect } from 'react';
import styles from './dashboard.module.scss';
import { useDispatch } from 'react-redux';
import { useMoviesReducerMovies } from '../movies/store/movies.reducer';
import { requestMovies } from '../movies/store/movies.actions';
import { requestSeries } from '../series/store/series.actions';
import { useSeriesReducerSeries } from '../series/store/series.reducer';
import { useListReducerList } from '../list/store/list.reducer';
import { requestList } from '../list/store/list.actions';
import { Fade } from '../../components/Fade';
import { ListItems } from '../../components/items-list/items-list';


const FavoriteListItems = () => {
	// get data from store and attach them to the state.
	const myList = useListReducerList();
	return (
		!!myList.length ? <ListItems title={'My List'} items={myList}/> : <></>
	)
}

const MoviesListItems = () => {
	// get data from store and attach them to the state.
	const movies = useMoviesReducerMovies();
	return (
		<ListItems title={'Movies'} items={movies}/>
	);
}

const SeriesListItems = () => {
	// get data from store and attach them to the state.
	const series = useSeriesReducerSeries();
	return (
		<ListItems title={'Series'} items={series}/>
	)
}

export const Dashboard = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		// fetch data on component first load
		dispatch(requestList());
		dispatch(requestMovies());
		dispatch(requestSeries());
	}, [dispatch]);

	return (
		<Fade time={1}
			  className={styles.container}>
			<FavoriteListItems/>
			<MoviesListItems/>
			<SeriesListItems/>
		</Fade>
	);
};