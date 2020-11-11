import React, { useEffect, useState } from 'react';
import styles from './series.module.scss';
import { Card } from '../../components/card/card';
import { CardType } from '../../models/enums';
import { getSeries } from '../../api/series.api';
import { Series } from '../../models/series.type';

export const SeriesLayout = () => {
	const [series, setSeries]: [Series[], Function] = useState([]);

	useEffect(() => {
		getSeries().then(res => {
			setSeries(res);
		});
	}, [series]);

	return (
		<div className={styles.container}>
			{series.map(movie => <Card key={movie.id}
									   item={movie}
									   type={CardType.Series}/>
			)}
		</div>
	);
};