import React, { useState } from 'react';
import styles from './card.module.scss';
import { Movie } from '../../models/movie.type';
import { Series } from '../../models/series.type';
import { useListReducerIsFavoriteMovie } from '../../modules/list/store/list.reducer';
import { CardHover } from './components/card-hover';
import { CardLogo } from './components/card-logo';


// The only important thing about this component are the actions,
// how they are sending data to the store.

// Behavior of this components was made for fun, do not take it into consideration.
type CardProps = {
	item: Movie | Series;
}
export const Card = ({item}: CardProps) => {
	const [hover, setHover] = useState(false);
	const isFavorite = useListReducerIsFavoriteMovie(item.id, item.type);

	return (
		<div className={styles.container}
			 onMouseEnter={() => setHover(true)}
			 onMouseLeave={() => setHover(false)}>
			<CardLogo/>
			{!hover && <div className={styles.img}
							style={{backgroundImage: `url(${item.imgUrl})`}}/>}
			{hover && <CardHover item={item} isFavorite={isFavorite}/>}
		</div>
	);
};