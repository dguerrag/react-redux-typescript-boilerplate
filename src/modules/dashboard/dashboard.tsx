import React, { useEffect } from 'react';
import styles from './dashboard.module.scss';
import { Card } from '../../components/card/card';
import { CardType } from '../../constants/enums';
import { HorizontalScroll } from '../../components/horizontal-scroll/horizontal-scroll';
import { useDispatch } from 'react-redux';
import { useMoviesReducerMovies } from '../movies/store/movies.reducer';
import { requestMovies } from '../movies/store/movies.actions';
import { requestSeries } from '../series/store/series.actions';
import { useSeriesReducerSeries } from '../series/store/series.reducer';
import { useListReducerList } from '../list/store/list.reducer';
import { requestList } from '../list/store/list.actions';
import { Sizes } from '../../constants/sizes';
import { Fade } from '../../components/Fade';

const height = Sizes.CARD_HEIGHT * 1.15 + Sizes.CARD_DOWN_INFO_HEIGHT;
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

	return (
		<Fade
			show={movies.length && series.length}
			time={1}
			className={styles.container}>
			{!!myList.length &&
			<>
				<div className={styles.title}>My List</div>
				<HorizontalScroll className={styles.row}
								  height={height}>
					{myList.map((item, i) =>
						<Card key={i}
							  item={item.item}
							  type={item.type}/>)}
				</HorizontalScroll>
			</>
			}
			<div className={styles.title}>Movies</div>
			<HorizontalScroll className={styles.row}
							  height={height}>
				{movies.map((movie) =>
					<Card key={movie.id}
						  item={movie}
						  type={CardType.Movie}/>
				)}
			</HorizontalScroll>
			<div className={styles.title}>Series</div>
			<HorizontalScroll className={styles.row}
							  height={height}>
				{series.map((serie) =>
					<Card key={serie.id}
						  item={serie}
						  type={CardType.Series}/>
				)}
			</HorizontalScroll>
		</Fade>
	);
};