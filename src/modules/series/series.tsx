import React, { useEffect, useState } from 'react';
import styles from './series.module.scss';
import { Card } from '../../components/card/card';
import { getSeries } from '../../api/series.api';
import { Series } from '../../models/series.type';
import { Fade } from '../../components/Fade';

export const SeriesLayout = () => {
	const [series, setSeries]: [Series[], Function] = useState([]);

	useEffect(() => {
		getSeries().then(res => {
			setSeries(res);
		});
	}, [series]);

	return (
		<Fade className={styles.container}>
			{series.map(movie => <Card key={movie.id} item={movie}/>)}
		</Fade>
	);
};