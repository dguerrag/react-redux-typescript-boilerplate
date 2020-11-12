import React, { useEffect } from 'react';
import styles from './series.module.scss';
import { useParams } from 'react-router-dom';
import { Card } from '../../components/card/card';
import { CardType } from '../../models/enums';
import { useSeriesReducerSelectedSeries } from './store/series.reducer';
import { useDispatch } from 'react-redux';
import { requestSeriesById } from './store/series.actions';


export const SeriesDetail = () => {
	const dispatch = useDispatch();
	const {id} = useParams<{ id: string }>();
	const series = useSeriesReducerSelectedSeries();

	useEffect(() => {
		dispatch(requestSeriesById(Number(id)));
	}, [id, dispatch]);

	return (
		<>
			{series &&
			<div className={styles.container}>
				<Card item={series} type={CardType.Series}/>
			</div>
			}
		</>
	);
};