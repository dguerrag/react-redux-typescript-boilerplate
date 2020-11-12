import React, { useEffect } from 'react';
import styles from './series.module.scss';
import { Card } from '../../components/card/card';
import { CardType } from '../../models/enums';
import { useSeriesReducerSeries } from './store/series.reducer';
import { useDispatch } from 'react-redux';
import { requestSeries } from './store/series.actions';

export const SeriesLayout = () => {
	const dispatch = useDispatch();

	const series = useSeriesReducerSeries();
	useEffect(() => {
		if (!series.length) {
			dispatch(requestSeries());
		}
	}, [series, dispatch]);

	return (
		<div className={styles.container}>
			{series.map(movie => <Card key={movie.id}
									   item={movie}
									   type={CardType.Series}/>
			)}
		</div>
	);
};