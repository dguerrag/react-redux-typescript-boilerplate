import React, { useEffect, useState } from 'react';
import styles from './list.module.scss';
import { Card } from '../../components/card/card';
import { getUserList } from '../../api/user-list.api';
import { UserListElement } from '../../models/user-list.type';
import { Fade } from '../../components/Fade';

export const List = () => {
	const [list, setList]: [UserListElement, Function] = useState([]);

	useEffect(() => {
		getUserList().then(res => {
			setList(res);
		});
	}, [list]);

	return (
		<Fade className={styles.container}>
			{list.map((item, i) =>
				<Card key={i} item={item}/>
			)}
		</Fade>
	);
};