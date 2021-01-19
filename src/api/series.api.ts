// Faking response of an api.
// You might replace all new Promises for fetch/axios/yourLibrary to fetch data

import { Series } from '../models/series.type';
import { series } from '../server/series';


export const getSeries = (): Promise<Series[]> => (
	new Promise((resolve) => setTimeout(() => resolve(series), 200))
);

export const getSeriesById = (id: number): Promise<Series> => {
	// All this logic is just for mocking purpose, it just would need to call a simple endpoint from your backend.
	const serie = series.find(e => e.id === id);
	if (!serie) {
		return new Promise(((resolve, reject) => setTimeout(() => reject(serie), 200)));
	}
	return new Promise((resolve) => setTimeout(() => resolve(serie as Series), 200));
};