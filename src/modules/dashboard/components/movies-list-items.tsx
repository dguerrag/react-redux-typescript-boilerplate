import React from 'react';
import { useMoviesReducerMovies } from '../../movies/store/movies.reducer';
import { ListItems } from '../../../components/items-list/items-list';

export const MoviesListItems = () => {
	// get data from store and attach them to the state.
	const movies = useMoviesReducerMovies();
	return (
		<ListItems title={'Movies'} items={movies}/>
	);
}