import React, { useEffect } from 'react';
import styles from './dashboard.module.scss';
import { Card } from '../../components/card/card';
import { CardType } from '../../models/enums';
import { HorizontalScroll } from '../../components/horizontal-scroll/horizontal-scroll';
import { useDispatch } from 'react-redux';
import { useMoviesReducerMovies } from '../movies/store/movies.reducer';
import { requestMovies } from '../movies/store/movies.actions';
import { requestSeries } from '../series/store/series.actions';
import { useSeriesReducerSeries } from '../series/store/series.reducer';
import { useListReducerList } from '../list/store/list.reducer';
import { requestList } from '../list/store/list.actions';

export const Dashboard = () => {
	const dispatch = useDispatch();
	const myList = useListReducerList();
	const movies = useMoviesReducerMovies();
	const series = useSeriesReducerSeries();

	useEffect(() => {
		dispatch(requestList());
		dispatch(requestMovies());
		dispatch(requestSeries())
	}, [dispatch]);

	return (
		<div className={styles.container}>
			{!!myList.length &&
			<>
				<div className={styles.title}>My List</div>
				<HorizontalScroll className={styles.row}>
					{myList.map((item, i) =>
						<Card key={i}
							  item={item.item}
							  type={item.type}/>)}
				</HorizontalScroll>
			</>
			}
			<div className={styles.title}>Movies</div>
			<HorizontalScroll className={styles.row}>
				{movies.map(movie => <Card key={movie.id}
										   item={movie}
										   type={CardType.Movie}/>
				)}
			</HorizontalScroll>
			<div className={styles.title}>Series</div>
			<HorizontalScroll className={styles.row}>
				{series.map(serie => <Card key={serie.id}
										   item={serie}
										   type={CardType.Series}/>
				)}
			</HorizontalScroll>
		</div>
	);
};