import React, { useState } from 'react';
import styles from './card.module.scss';
import { Movie } from '../../models/movie.type';
import { Series } from '../../models/series.type';
import LogoShort from '../../assets/images/netflix_logo_short.svg';
import { CardType } from '../../constants/enums';
import { Plus } from '../../assets/images/plus';
import { Checked } from '../../assets/images/checked';
import { Routes } from '../../routes/routes.types';
import { useDispatch } from 'react-redux';
import { requestAddItemList, requestRemoveItemFromList } from '../../modules/list/store/list.actions';
import { push } from 'connected-react-router';
import { useListReducerIsFavorite } from '../../modules/list/store/list.reducer';


type CardProps = {
	item: Movie | Series;
	type: CardType;
}
export const Card = ({item, type}: CardProps) => {
	const dispatch = useDispatch();
	const [hover, setHover] = useState(false);
	const isFavorite = useListReducerIsFavorite(item.id);

	const addItemToFavorite = () => {
		dispatch(requestAddItemList(item, type));
		setHover(false);
	};

	const removeItemFromFavorite = (id: number) => {
		dispatch(requestRemoveItemFromList(id));
		setHover(false);
	};

	const getDuration = () => {
		if (type === CardType.Movie) {
			return item.duration;
		}
		return (item as Series).season.length + ' seasons';
	};

	const navigateToDetail = () => {
		const baseUrl = type === CardType.Movie ? Routes.MOVIES : Routes.SERIES;
		dispatch(push(`${baseUrl}/${item.id}`));
	};

	return (
		<div className={`${styles.container}`}
			 onMouseEnter={() => setHover(true)}
			 onMouseLeave={() => setHover(false)}>
			<img src={LogoShort} alt={'logo-short'} className={styles.logo}/>
			{!hover && <div className={styles.img}
							style={{backgroundImage: `url(${item.imgUrl})`}}/>}
			<div className={`${styles.hidden} ${hover && styles.hover}`}>
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
		</div>
	);
};