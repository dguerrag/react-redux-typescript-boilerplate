import React from 'react';
import { Movie } from '../../../models/movie.type';
import { Series } from '../../../models/series.type';
import styles from '../card.module.scss';
import { Checked } from '../../../assets/images/checked';
import { Plus } from '../../../assets/images/plus';
import { requestAddItemList, requestRemoveItemFromList } from '../../../modules/list/store/list.actions';
import { CardType } from '../../../constants/enums';
import { Routes } from '../../../routes/routes.types';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import { CardLogo } from './card-logo';


type CardHoverProps = {
	item: Movie | Series;
	isFavorite: boolean;
}
export const CardHover = ({item, isFavorite}: CardHoverProps) => {
	const dispatch = useDispatch();

	const addItemToFavorite = () => {
		dispatch(requestAddItemList(item));
	};

	const removeItemFromFavorite = (id: number) => {
		dispatch(requestRemoveItemFromList(id, item.type));
	};

	const getDuration = () => {
		if (item.type === CardType.Movie) {
			return item.duration;
		}
		return (item as Series).season.length + ' seasons';
	};

	const navigateToDetail = () => {
		const baseUrl = item.type === CardType.Movie ? Routes.MOVIES : Routes.SERIES;
		dispatch(push(`${baseUrl}/${item.id}`));
	};

	return (
		<div className={`${styles.hidden} ${styles.hover}`}>
			<CardLogo/>
			<div className={styles.img}
				 onClick={navigateToDetail}
				 style={{backgroundImage: `url(${item.imgUrl})`}}/>
			<div className={styles.info}>
				{
					isFavorite
						? <button className={styles.icon}
								  onClick={() => removeItemFromFavorite(item.id)}>
							<Checked/>
						</button>
						: <button className={styles.icon}
								  onClick={addItemToFavorite}>
							<Plus/>
						</button>
				}
				<div className={styles.innerInfo}>
					<div className={styles.coincidence}>{item.coincidence} % of coincidence</div>
					<div>{getDuration()}</div>
				</div>
			</div>
		</div>
	);
};