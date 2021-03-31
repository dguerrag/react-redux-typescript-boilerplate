import React from 'react';
import styles from './items-list.module.scss';
import { UserListElement } from '../../models/user-list.type';
import { Card } from '../card/card';

type Props = {
	title: string;
	items: UserListElement;
}
export const ListItems = ({title, items}: Props) => (
	<div className={styles.container}>
		<div className={styles.title}>{title}</div>
		<div className={styles.items}>
			{items.map((item) =>
				<Card key={item.id} item={item}/>
			)}
		</div>
	</div>
);