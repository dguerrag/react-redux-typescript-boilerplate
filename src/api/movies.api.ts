// Faking response of an api.
// You might replace all new Promises for fetch/axios/yourLibrary to fetch data

import { movies } from '../server/movies';
import { Movie } from '../models/movie.type';

export const getMovies = (): Promise<Movie[]> => (
	new Promise((resolve) => setTimeout(() => resolve(movies), 200))
);

export const getMovieById = (id: string | number): Promise<Movie> => {
	// All this logic is just for mocking purpose, it just would need to call a simple endpoint from your backend.
	const movie = movies.find(e => e.id === id);
	if (!movie) {
		return new Promise(((resolve, reject) => setTimeout(() => reject(movie), 200)));
	}
	return new Promise((resolve) => setTimeout(() => resolve(movie as Movie), 200));
};