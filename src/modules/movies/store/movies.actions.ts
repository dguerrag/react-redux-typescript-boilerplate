import { Movie } from '../../../models/movie.type';

export enum MovieActionTypes {
	REQUEST_MOVIES = '[Movies] get movies request',
	RECEIVE_MOVIES = '[Movies] get movies response',
	REQUEST_MOVIE_ID = '[Movie] get movie by id request',
	RECEIVE_MOVIE_ID = '[Movies] get movie by id response',
	ADD_FAVORITE = '[Movie] add movie to favorites',
	REMOVE_FAVORITE = '[Movie] remove movie from favorites'
}

export type RequestMovies = {
	type: MovieActionTypes.REQUEST_MOVIES;
}

export type ReceiveMovies = {
	type: MovieActionTypes.RECEIVE_MOVIES;
	movies: Movie[];
}

export type RequestMovieById = {
	type: MovieActionTypes.REQUEST_MOVIE_ID;
	id: number | string;
}

export type ReceiveMovieById = {
	type: MovieActionTypes.RECEIVE_MOVIE_ID;
	movie: Movie;
}

export type AddFavoriteMovie = {
	type: MovieActionTypes.ADD_FAVORITE;
	id: number;
}

export type RemoveFavoriteMovie = {
	type: MovieActionTypes.REMOVE_FAVORITE;
	id: number;
}

export type MovieActions =
	RequestMovies |
	ReceiveMovies |
	RequestMovieById |
	ReceiveMovieById |
	AddFavoriteMovie |
	RemoveFavoriteMovie;

export const requestMovies = (): MovieActions => ({type: MovieActionTypes.REQUEST_MOVIES});
export const receiveMovies = (movies: Movie[]): MovieActions => ({type: MovieActionTypes.RECEIVE_MOVIES, movies});
export const requestMovieById = (id: string | number): MovieActions => ({type: MovieActionTypes.REQUEST_MOVIE_ID, id});
export const receiveMovieById = (movie: Movie): MovieActions => ({type: MovieActionTypes.RECEIVE_MOVIE_ID, movie});
export const addFavoriteMovie = (id: number): MovieActions => ({type: MovieActionTypes.ADD_FAVORITE, id});
export const removeFavoriteMovie = (id: number): MovieActions => ({type: MovieActionTypes.REMOVE_FAVORITE, id});