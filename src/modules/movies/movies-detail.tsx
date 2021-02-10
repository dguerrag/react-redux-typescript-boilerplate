import React, { useEffect, useState } from 'react';
import styles from './movies.module.scss';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../../api/movies.api';
import { Movie } from '../../models/movie.type';
import { Card } from '../../components/card/card';
import { CardType } from '../../models/enums';
import { Fade } from '../../components/Fade';


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
				<Card item={movie} type={CardType.Movie}/>
			</Fade>
			}
		</>
	);
};