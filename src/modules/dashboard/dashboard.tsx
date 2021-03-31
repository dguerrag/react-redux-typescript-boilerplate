import React, { useEffect, useMemo, useState } from 'react';
import styles from './dashboard.module.scss';
import { getMovies } from '../../api/movies.api';
import { Movie } from '../../models/movie.type';
import { Series } from '../../models/series.type';
import { getSeries } from '../../api/series.api';
import { getUserList } from '../../api/user-list.api';
import { UserListElement } from '../../models/user-list.type';
import { Fade } from '../../components/Fade';
import { ListItems } from '../../components/items-list/items-list';

export const Dashboard = () => {
	const [movies, setMovies]: [Movie[], Function] = useState([]);
	const [series, setSeries]: [Series[], Function] = useState([]);
	const [myList, setMyList]: [UserListElement, Function] = useState([]);

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

	const addElementToList = (item: Movie | Series) => {
		setMyList([...myList, item]);
	};

	const removeElementFromList = (id: number) => {
		setMyList(myList.filter(e => e.id !== id));
	};

	const renderMovies = useMemo(() =>
			<ListItems
				title={'Movies'}
				items={movies}
				addFavorite={addElementToList}
				removeFavorite={removeElementFromList}/>,
		[movies]);
	const renderSeries = useMemo(() =>
			<ListItems
				title={'Series'}
				items={series}
				addFavorite={addElementToList}
				removeFavorite={removeElementFromList}/>,
		[series]);

	return (
		<Fade
			show={movies.length && series.length}
			time={1}
			className={styles.container}>
			{!!myList.length && <ListItems title={'My List'}
										   items={myList}
										   addFavorite={addElementToList}
										   removeFavorite={removeElementFromList}
										   isFavorite={true}/>
			}
			{renderMovies}
			{renderSeries}
		</Fade>
	);
};