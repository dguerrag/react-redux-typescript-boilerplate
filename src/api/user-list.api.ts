// Faking response of an api.
// You might replace all new Promises for fetch/axios/yourLibrary to fetch data

import { UserListElement } from '../models/user-list.type';
import { Movie } from '../models/movie.type';
import { Series } from '../models/series.type';

let list: UserListElement = [];

export const getUserList = (): Promise<UserListElement> => (
	new Promise((resolve) => setTimeout(() => resolve(list), 200))
);

export const addElementToList = (item: Movie | Series): Promise<UserListElement> => {
	// All this logic is just for mocking purpose, it just would need to call a simple endpoint from your backend.
	const exist = list.some(e => e.id === item.id);
	if (exist) {
		return new Promise<UserListElement>(((resolve, reject) => setTimeout(() => reject([...list]), 200)));
	}
	list = [...list, item];
	return new Promise((resolve) => setTimeout(() => resolve([...list]), 200));
};

export const removeElementFromList = (id: string | number): Promise<UserListElement> => {
	// All this logic is just for mocking purpose, it just would need to call a simple endpoint from your backend.
	list = list.filter(e => e.id !== id);
	return new Promise((resolve) => setTimeout(() => resolve([...list]), 200));
};