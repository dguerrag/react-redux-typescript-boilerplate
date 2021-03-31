import React, { useContext, useEffect } from 'react';
import styles from './series.module.scss';
import { Card } from '../../components/card/card';
import { SeriesActionTypes } from './series.actions';
import { Fade } from '../../components/Fade';
import { SeriesContext } from './series.context';
import { getSeries } from '../../api/series.api';

export const SeriesLayout = () => {
	const [{series}, dispatch] = useContext(SeriesContext);

	useEffect(() => {
		// fetch data on component first load
		getSeries().then(series => {
			dispatch({type: SeriesActionTypes.RECEIVE_SERIES, series});
		});
	}, [dispatch]);

	return (
		<Fade className={styles.container}>
			{series.map(movie => <Card key={movie.id} item={movie}/>)}
		</Fade>
	);
};