import { movies } from '../server/movies';
import { Movie } from '../models/movie.type';

export const getMovies = (): Promise<Movie[]> => (
	new Promise((resolve) => setTimeout(() => resolve(movies), 200))
);

export const getMovieById = (id: number): Promise<Movie> => {
	const movie = movies.find(e => e.id === id);
	if (!movie) {
		return new Promise(((resolve, reject) => setTimeout(() => reject(movie), 200)));
	}
	return new Promise((resolve) => setTimeout(() => resolve(movie as Movie), 200));
};