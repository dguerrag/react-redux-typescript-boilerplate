import { Series } from '../models/series.type';
import { series } from '../server/series';


export const getSeries = (): Promise<Series[]> => (
	new Promise((resolve) => setTimeout(() => resolve(series), 200))
);

export const getSeriesById = (id: number): Promise<Series> => {
	const serie = series.find(e => e.id === id);
	if (!serie) {
		return new Promise(((resolve, reject) => setTimeout(() => reject(serie), 200)));
	}
	return new Promise((resolve) => setTimeout(() => resolve(serie as Series), 200));
};