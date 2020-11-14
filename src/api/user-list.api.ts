import { UserListElement } from '../models/user-list.type';
import { Movie } from '../models/movie.type';
import { Series } from '../models/series.type';
import { CardType } from '../constants/enums';

let list: UserListElement[] = [];

export const getUserList = (): Promise<UserListElement[]> => (
	new Promise((resolve) => setTimeout(() => resolve(list), 200))
);

export const addElementToList = (item: Movie | Series, type: CardType): Promise<UserListElement[]> => {
	const exist = list.some(e => e.item.id === item.id);
	if (exist) {
		return new Promise<UserListElement[]>(((resolve, reject) => setTimeout(() => reject([...list]), 200)));
	}
	list = [...list, {item, type}];
	return new Promise((resolve) => setTimeout(() => resolve([...list]), 200));
};

export const removeElementFromList = (id: number): Promise<UserListElement[]> => {
	list = list.filter(e => e.item.id !== id);
	return new Promise((resolve) => setTimeout(() => resolve([...list]), 200));
};