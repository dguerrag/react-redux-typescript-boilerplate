import { UserListElement } from '../../models/user-list.type';
import { CardType } from '../../constants/enums';
import { Movie } from '../../models/movie.type';
import { Series } from '../../models/series.type';

export enum ListActionTypes {
	REQUEST_LIST = '[List] get list request',
	RECEIVE_LIST = '[List] get list response',
	REQUEST_ADD_ITEM = '[Add item to list] add item to list request',
	RECEIVE_ADD_ITEM = '[Add item to list] add item to list response',
	REQUEST_REMOVE_ITEM = '[Remove item from list] remove item from list request',
	RECEIVE_REMOVE_ITEM = '[Remove item from list] remove item from list response'
}

export type RequestList = {
	type: ListActionTypes.REQUEST_LIST;
}

export type ReceiveList = {
	type: ListActionTypes.RECEIVE_LIST;
	list: UserListElement;
}

export type RequestAddItemToList = {
	type: ListActionTypes.REQUEST_ADD_ITEM;
	item: Movie | Series;
}

export type ReceiveAddItemToList = {
	type: ListActionTypes.RECEIVE_ADD_ITEM;
	item: Movie | Series;
}

export type RequestRemoveItemFromList = {
	type: ListActionTypes.REQUEST_REMOVE_ITEM;
	id: number;
	itemType: CardType;
}

export type ReceiveRemoveItemFromList = {
	type: ListActionTypes.RECEIVE_REMOVE_ITEM;
	id: number;
}

export type ListActions =
	RequestList |
	ReceiveList |
	RequestAddItemToList |
	ReceiveAddItemToList |
	RequestRemoveItemFromList |
	ReceiveRemoveItemFromList;

export const requestList = (): ListActions => ({type: ListActionTypes.REQUEST_LIST});
export const receiveList = (list: UserListElement): ListActions => ({type: ListActionTypes.RECEIVE_LIST, list});
export const requestAddItemList = (item: Movie | Series): ListActions => ({
	type: ListActionTypes.REQUEST_ADD_ITEM,
	item
});
export const receiveAddItemList = (item: Movie | Series): ListActions => ({
	type: ListActionTypes.RECEIVE_ADD_ITEM,
	item
});
export const requestRemoveItemFromList = (id: number, itemType: CardType): ListActions => ({
	type: ListActionTypes.REQUEST_REMOVE_ITEM,
	id,
	itemType
});
export const receiveRemoveItemFromList = (id: number): ListActions => ({
	type: ListActionTypes.RECEIVE_REMOVE_ITEM,
	id
});