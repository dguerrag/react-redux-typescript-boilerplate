import React, { useContext, useEffect } from 'react';
import styles from './movies.module.scss';
import { Card } from '../../components/card/card';
import { MovieActionTypes } from './movies.actions';
import { Fade } from '../../components/Fade';
import { MoviesContext } from './movies.context';
import { getMovies } from '../../api/movies.api';

export const Movies = () => {
	const [{movies}, dispatch] = useContext(MoviesContext);

	useEffect(() => {
		// fetch data on component first load
		getMovies().then(movies => {
			dispatch({type: MovieActionTypes.RECEIVE_MOVIES, movies});
		});
	}, [dispatch]);

	return (
		<Fade className={styles.container}>
			{movies.map(movie => <Card key={movie.id} item={movie}/>
			)}
		</Fade>
	);
};