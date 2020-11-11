import React, { useEffect, useState } from 'react';
import styles from './movies.module.scss';
import { Movie } from '../../models/movie.type';
import { getMovies } from '../../api/movies.api';
import { Card } from '../../components/card/card';
import { CardType } from '../../models/enums';

export const Movies = () => {
	const [movies, setMovies]: [Movie[], Function] = useState([]);

	useEffect(() => {
		getMovies().then(res => {
			setMovies(res);
		});
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