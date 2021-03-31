import React, { useEffect } from 'react';
import styles from './movies.module.scss';
import { useParams } from 'react-router-dom';
import { Card } from '../../components/card/card';
import { useDispatch } from 'react-redux';
import { useMoviesReducerSelectedMovie } from './store/movies.reducer';
import { requestMovieById } from './store/movies.actions';
import { Fade } from '../../components/Fade';


export const MoviesDetail = () => {
	const dispatch = useDispatch();
	const {id} = useParams<{ id: string }>();
	const movie = useMoviesReducerSelectedMovie();

	useEffect(() => {
		dispatch(requestMovieById(Number(id)));
	}, [dispatch, id]);

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