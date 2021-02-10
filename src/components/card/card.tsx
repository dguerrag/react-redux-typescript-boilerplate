import React, { useState } from 'react';
import styles from './card.module.scss';
import { Movie } from '../../models/movie.type';
import { Series } from '../../models/series.type';
import LogoShort from '../../assets/images/netflix_logo_short.svg';
import { CardType } from '../../models/enums';
import { Plus } from '../../assets/images/plus';
import { addElementToList, removeElementFromList } from '../../api/user-list.api';
import { Checked } from '../../assets/images/checked';
import { useHistory } from 'react-router-dom';
import { Routes } from '../../routes/routes.types';
import { Fade } from '../Fade';

// The only important thing about this component are the actions,
// how they are send to the store.

// Behavior of this components was made for fun, do not take it into consideration.

type CardProps = {
	item: Movie | Series;
	type: CardType;
	addFavorite?: Function;
	removeFavorite?: Function;
	isFavorite?: boolean;
}
export const Card = ({
						 item,
						 type,
						 addFavorite = () => {},
						 removeFavorite = () => {},
						 isFavorite = false}: CardProps) => {
	const [hover, setHover] = useState(false);
	const history = useHistory();

	const addItemToFavorite = async () => {
		await addElementToList(item, type);
		addFavorite && addFavorite(item, type);
		setHover(false);
	};

	const removeItemFromFavorite = async (id: number) => {
		await removeElementFromList(id);
		removeFavorite && removeFavorite(id);
		setHover(false);
	};

	const getDuration = () => {
		if (type === CardType.Movie) {
			return item.duration;
		}
		return (item as Series).season.length + ' seasons';
	}

	const navigateToDetail = () => {
		const baseUrl = type === CardType.Movie ? Routes.MOVIES : Routes.SERIES;
		history.push(`${baseUrl}/${item.id}`);
	}

	return (
		<div className={`${styles.container}`}
			 onMouseEnter={() => setHover(true)}
			 onMouseLeave={() => setHover(false)}>
			<img src={LogoShort} alt={'logo-short'} className={styles.logo}/>
			{!hover && <div className={styles.img}
							style={{backgroundImage: `url(${item.imgUrl})`}}/>}
			<Fade show={hover}
				  time={0}
				  className={`${styles.hidden} ${hover && styles.hover}`}>
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
			</Fade>
		</div>
	);
};