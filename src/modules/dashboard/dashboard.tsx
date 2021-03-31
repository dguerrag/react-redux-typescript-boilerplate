import React, { useEffect } from 'react';
import styles from './dashboard.module.scss';
import { useDispatch } from 'react-redux';
import { requestMovies } from '../movies/store/movies.actions';
import { requestSeries } from '../series/store/series.actions';
import { requestList } from '../list/store/list.actions';
import { Fade } from '../../components/Fade';
import { FavoriteListItems } from './components/favorite-list-items';
import { MoviesListItems } from './components/movies-list-items';
import { SeriesListItems } from './components/series-list-items';


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