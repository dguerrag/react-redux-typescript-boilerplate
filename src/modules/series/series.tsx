import React, { useEffect } from 'react';
import styles from './series.module.scss';
import { Card } from '../../components/card/card';
import { CardType } from '../../constants/enums';
import { useSeriesReducerSeries } from './store/series.reducer';
import { useDispatch } from 'react-redux';
import { requestSeries } from './store/series.actions';
import { Fade } from '../../components/Fade';

export const SeriesLayout = () => {
	const dispatch = useDispatch();

	const series = useSeriesReducerSeries();
	useEffect(() => {
		if (!series.length) {
			dispatch(requestSeries());
		}
	}, [series, dispatch]);

	return (
		<Fade className={styles.container}>
			{series.map(movie => <Card key={movie.id}
									   item={movie}
									   type={CardType.Series}/>
			)}
		</Fade>
	);
};