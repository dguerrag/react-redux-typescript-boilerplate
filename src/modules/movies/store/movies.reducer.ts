import { Movie } from '../../../models/movie.type';
import { MovieActions, MovieActionTypes } from './movies.actions';
import { useSelector } from 'react-redux';
import { State } from '../../../store/store';

export type MoviesStateType = {
	movies: Movie[];
	movie: Movie | null;
}

const moviesInitialState: MoviesStateType = {
	movies: [],
	movie: null
};

export const moviesReducer = (state = moviesInitialState, action: MovieActions): MoviesStateType => {
	switch (action.type) {
		case MovieActionTypes.RECEIVE_MOVIES:
			return {...state, movies: action.movies};
		case MovieActionTypes.RECEIVE_MOVIE_ID:
			return {...state, movie: action.movie};
		default:
			return state;
	}
};

export const moviesSelector = (state: State) => state.moviesReducer.movies;
export const useMoviesReducerMovies = () => useSelector(moviesSelector);
export const useMoviesReducerSelectedMovie = () => useSelector((state: State) => state.moviesReducer.movie);

