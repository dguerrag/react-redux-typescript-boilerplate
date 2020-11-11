import React, { useEffect, useState } from 'react';
import styles from './list.module.scss';
import { Card } from '../../components/card/card';
import { getUserList } from '../../api/user-list.api';
import { UserList } from '../../models/user-list.type';

export const List = () => {
	const [list, setList]: [UserList[], Function] = useState([]);

	useEffect(() => {
		getUserList().then(res => {
			setList(res);
		});
	}, [list]);

	return (
		<div className={styles.container}>
			{list.map((item, i) => <Card key={i}
									   item={item.item}
									   type={item.type}/>
			)}
		</div>
	);
};