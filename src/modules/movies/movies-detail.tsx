import React, { useEffect, useState } from 'react';
import styles from './movies.module.scss';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../../api/movies.api';
import { Movie } from '../../models/movie.type';
import { Card } from '../../components/card/card';
import { CardType } from '../../models/enums';


export const MoviesDetail = () => {
	const {id} = useParams<{ id: string }>();
	const [movie, setMovie]: [Movie | undefined, Function] = useState();

	useEffect(() => {
		getMovieById(Number(id)).then((res) => setMovie(res));
	}, [id]);

	return (
		<>
			{movie &&
			<div className={styles.container}>
				<Card item={movie} type={CardType.Movie}/>
			</div>
			}
		</>
	);
};