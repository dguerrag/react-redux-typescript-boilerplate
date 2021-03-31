import React, { useEffect, useState } from 'react';
import styles from './series.module.scss';
import { useParams } from 'react-router-dom';
import { Card } from '../../components/card/card';
import { Fade } from '../../components/Fade';
import { Series } from '../../models/series.type';
import { getSeriesById } from '../../api/series.api';


export const SeriesDetail = () => {
	const {id} = useParams<{ id: string }>();
	const [series, setSeries]: [Series | undefined, Function] = useState();

	useEffect(() => {
		getSeriesById(Number(id)).then((res) => setSeries(res));
	}, [id]);

	return (
		<>
			{series &&
			<Fade className={styles.container}>
				<Card item={series}/>
			</Fade>
			}
		</>
	);
};