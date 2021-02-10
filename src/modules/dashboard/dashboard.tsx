import React, { useEffect, useState } from 'react';
import styles from './dashboard.module.scss';
import { getMovies } from '../../api/movies.api';
import { Movie } from '../../models/movie.type';
import { Card } from '../../components/card/card';
import { CardType } from '../../models/enums';
import { HorizontalScroll } from '../../components/horizontal-scroll/horizontal-scroll';
import { Series } from '../../models/series.type';
import { getSeries } from '../../api/series.api';
import { getUserList } from '../../api/user-list.api';
import { UserListElement } from '../../models/user-list.type';
import { Sizes } from '../../constants/sizes';
import { Fade } from '../../components/Fade';

const height = Sizes.CARD_HEIGHT * 1.15 + Sizes.CARD_DOWN_INFO_HEIGHT;
export const Dashboard = () => {
	const [movies, setMovies]: [Movie[], Function] = useState([]);
	const [series, setSeries]: [Series[], Function] = useState([]);
	const [myList, setMyList]: [UserListElement[], Function] = useState([]);

	useEffect(() => {
		getUserList().then(res => {
			setMyList(res);
		});
		getMovies().then(res => {
			setMovies(res);
		});
		getSeries().then(res => {
			setSeries(res);
		});
	}, []);

	const addElementToList = (item: Movie | Series, type: CardType) => {
		setMyList([...myList, {item, type}]);
	};

	const removeElementFromList = (id: number) => {
		setMyList(myList.filter(e => e.item.id !== id));
	};

	return (
		<Fade
			show={movies.length && series.length}
			time={1}
			className={styles.container}>
			{!!myList.length &&
			<>
				<div className={styles.title}>My List</div>
				<HorizontalScroll className={styles.row}
								  height={height}>
					{myList.map((item, i) =>
						<Card key={i}
							  item={item.item}
							  type={item.type}
							  addFavorite={addElementToList}
							  removeFavorite={removeElementFromList}
							  isFavorite={true}/>)}
				</HorizontalScroll>
			</>
			}
			<div className={styles.title}>Movies</div>
			<HorizontalScroll className={styles.row}
							  height={height}>
				{movies.map(movie => <Card key={movie.id}
										   item={movie}
										   type={CardType.Movie}
										   addFavorite={addElementToList}
										   removeFavorite={removeElementFromList}/>
				)}
			</HorizontalScroll>
			<div className={styles.title}>Series</div>
			<HorizontalScroll className={styles.row}
							  height={height}>
				{series.map(serie => <Card key={serie.id}
										   item={serie}
										   type={CardType.Series}
										   addFavorite={addElementToList}
										   removeFavorite={removeElementFromList}/>
				)}
			</HorizontalScroll>
		</Fade>
	);
};