import React, { useEffect } from 'react';
import styles from './movies.module.scss';
import { Card } from '../../components/card/card';
import { CardType } from '../../models/enums';
import { useMoviesReducerMovies } from './store/movies.reducer';
import { useDispatch } from 'react-redux';
import { requestMovies } from './store/movies.actions';

export const Movies = () => {
	const dispatch = useDispatch();
	const movies = useMoviesReducerMovies();

	useEffect(() => {
		if (!movies.length) {
			dispatch(requestMovies());
		}
	}, [movies]);

	return (
		<div className={styles.container}>
			{movies.map(movie => <Card key={movie.id}
									   item={movie}
									   type={CardType.Movie}/>
			)}
		</div>
	);
};