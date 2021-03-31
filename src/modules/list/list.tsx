import React, { useContext, useEffect } from 'react';
import styles from './list.module.scss';
import { Card } from '../../components/card/card';
import { ListActionTypes } from './list.actions';
import { Fade } from '../../components/Fade';
import { FavoritesContext } from './list.context';
import { getUserList } from '../../api/user-list.api';

export const List = () => {
	const [{list}, dispatch] = useContext(FavoritesContext);

	useEffect(() => {
		// fetch data on component first load
		getUserList().then(list => {
			dispatch({type: ListActionTypes.RECEIVE_LIST, list});
		});
	}, [dispatch]);

	return (
		<Fade className={styles.container}>
			{list.map((item, i) =>
				<Card key={i} item={item}/>
			)}
		</Fade>
	);
};