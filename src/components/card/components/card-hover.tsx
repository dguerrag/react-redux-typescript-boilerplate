import React, { useContext } from 'react';
import { Movie } from '../../../models/movie.type';
import { Series } from '../../../models/series.type';
import styles from '../card.module.scss';
import { Checked } from '../../../assets/images/checked';
import { Plus } from '../../../assets/images/plus';
import { receiveAddItemList, receiveRemoveItemFromList } from '../../../modules/list/list.actions';
import { CardType } from '../../../constants/enums';
import { Routes } from '../../../routes/routes.types';
import { CardLogo } from './card-logo';
import { addElementToList, removeElementFromList } from '../../../api/user-list.api';
import { FavoritesContext } from '../../../modules/list/list.context';
import { useHistory } from 'react-router-dom';


type CardHoverProps = {
	item: Movie | Series;
	isFavorite: boolean;
}
export const CardHover = ({item, isFavorite}: CardHoverProps) => {
	const history = useHistory();

	// const [state, dispatchFavorite] = useContext(FavoritesContext);

	const addItemToFavorite = async () => {
		await addElementToList(item);
		// dispatchFavorite(receiveAddItemList(item));
		// dispatch(requestAddItemList(item));
	};

	const removeItemFromFavorite = async (id: number) => {
		await removeElementFromList(id);
		// dispatchFavorite(receiveRemoveItemFromList(id));
		// dispatch(requestRemoveItemFromList(id, item.type));
	};

	const getDuration = () => {
		if (item.type === CardType.Movie) {
			return item.duration;
		}
		return (item as Series).season.length + ' seasons';
	};

	const navigateToDetail = () => {
		const baseUrl = item.type === CardType.Movie ? Routes.MOVIES : Routes.SERIES;
		history.push(`${baseUrl}/${item.id}`);
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