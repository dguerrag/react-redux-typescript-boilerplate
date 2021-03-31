import React, { useEffect, useState } from 'react';
import styles from './movies.module.scss';
import { useParams } from 'react-router-dom';
import { Card } from '../../components/card/card';
import { Fade } from '../../components/Fade';
import { Movie } from '../../models/movie.type';
import { getMovieById } from '../../api/movies.api';


export const MoviesDetail = () => {
	const {id} = useParams<{ id: string }>();
	const [movie, setMovie]: [Movie | undefined, Function] = useState();

	useEffect(() => {
		getMovieById(Number(id)).then((res) => setMovie(res));
	}, [id]);

	return (
		<>
			{movie &&
			<Fade className={styles.container}>
				<Card item={movie}/>
			</Fade>
			}
		</>
	);
};