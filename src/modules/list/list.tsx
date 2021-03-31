import React, { useEffect } from 'react';
import styles from './list.module.scss';
import { Card } from '../../components/card/card';
import { useListReducerList } from './store/list.reducer';
import { useDispatch } from 'react-redux';
import { requestList } from './store/list.actions';
import { Fade } from '../../components/Fade';

export const List = () => {
	const dispatch = useDispatch();
	const list = useListReducerList();

	useEffect(() => {
		if (!list.length) {
			dispatch(requestList());
		}
	}, [list, dispatch]);

	return (
		<Fade className={styles.container}>
			{list.map((item, i) =>
				<Card key={i} item={item}/>
			)}
		</Fade>
	);
};