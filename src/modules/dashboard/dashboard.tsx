import React, { useEffect, useMemo } from 'react';
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


export const Dashboard = () => {
	const dispatch = useDispatch();
	// get data from store an attach them to the state.
	const myList = useListReducerList();
	const movies = useMoviesReducerMovies();
	const series = useSeriesReducerSeries();

	useEffect(() => {
		// fetch data on component first load
		dispatch(requestList());
		dispatch(requestMovies());
		dispatch(requestSeries());
	}, [dispatch]);

	const renderMovies = useMemo(() => <ListItems title={'Movies'} items={movies}/>, [movies]);
	const renderSeries = useMemo(() => <ListItems title={'Series'} items={series}/>, [series]);

	return (
		<Fade show={!!(movies.length && series.length)}
			  time={1}
			  className={styles.container}>
			{!!myList.length && <ListItems title={'My List'} items={myList}/>}
			{renderMovies}
			{renderSeries}
		</Fade>
	);
};