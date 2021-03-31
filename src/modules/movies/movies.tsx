import React, { useEffect, useState } from 'react';
import styles from './movies.module.scss';
import { Movie } from '../../models/movie.type';
import { getMovies } from '../../api/movies.api';
import { Card } from '../../components/card/card';
import { Fade } from '../../components/Fade';

export const Movies = () => {
	const [movies, setMovies]: [Movie[], Function] = useState([]);

	useEffect(() => {
		getMovies().then(res => {
			setMovies(res);
		});
	}, [movies]);

	return (
		<Fade className={styles.container}>
			{movies.map(movie => <Card key={movie.id} item={movie}/>)}
		</Fade>
	);
};