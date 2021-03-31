import React, { createContext, useReducer } from 'react';
import { Movie } from '../../models/movie.type';
import { MovieActions, MovieActionTypes } from './movies.actions';

export type MoviesStateType = {
	movies: Movie[];
	movie: Movie | null;
	[favorite: number]: boolean;
}

const moviesInitialState: any = {
	movies: [],
	movie: null
};

export const moviesReducer = (state: MoviesStateType, action: MovieActions): MoviesStateType => {
	switch (action.type) {
		case MovieActionTypes.RECEIVE_MOVIES:
			return {...state, movies: action.movies};
		case MovieActionTypes.RECEIVE_MOVIE_ID:
			return {...state, movie: action.movie};
		case MovieActionTypes.ADD_FAVORITE:
			return {
				...state, [action.id]: true
			};
		case MovieActionTypes.REMOVE_FAVORITE:
			return {
				...state, [action.id]: false
			};
		default:
			return state;
	}
};

export const MoviesContext = createContext<[MoviesStateType, Function]>(moviesInitialState);

export const MoviesContextProvider = ({children}: any) => (
	<MoviesContext.Provider value={useReducer(moviesReducer, moviesInitialState)}>
		{children}
	</MoviesContext.Provider>
);