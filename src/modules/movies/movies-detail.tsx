import React, { useEffect } from 'react';
import styles from './movies.module.scss';
import { useParams } from 'react-router-dom';
import { Card } from '../../components/card/card';
import { CardType } from '../../constants/enums';
import { useDispatch } from 'react-redux';
import { useMoviesReducerSelectedMovie } from './store/movies.reducer';
import { requestMovieById } from './store/movies.actions';


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
			<div className={styles.container}>
				<Card item={movie} type={CardType.Movie}/>
			</div>
			}
		</>
	);
};