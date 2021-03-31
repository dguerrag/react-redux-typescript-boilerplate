import { ListActions, ListActionTypes } from './list.actions';
import { useSelector } from 'react-redux';
import { State } from '../../../store/store';
import { UserListElement } from '../../../models/user-list.type';
import { CardType } from '../../../constants/enums';

export type ListStateType = {
	list: UserListElement;
}

const listInitialState: ListStateType = {
	list: []
};

export const listReducer = (state = listInitialState, action: ListActions): ListStateType => {
	switch (action.type) {
		case ListActionTypes.RECEIVE_LIST:
			return {...state, list: action.list};
		case ListActionTypes.RECEIVE_ADD_ITEM:
			return {
				...state,
				list: [
					...state.list,
					action.item
				]
			};
		case ListActionTypes.RECEIVE_REMOVE_ITEM:
			return {
				...state,
				list: state.list.filter(e => e.id !== action.id)
			};
		default:
			return state;
	}
};

export const listSelector = (state: State) => state.listReducer.list;
export const useListReducerList = () => useSelector(listSelector);
export const useListReducerIsFavorite = (id: number) => useSelector((state: State) => state.listReducer.list.some(e => e.id === id));


export const useListReducerIsFavoriteMovie = (id: number, type: CardType) => useSelector((state: State) => (
	type === CardType.Movie
		? state.moviesReducer[id]
		: state.seriesReducer[id])
);

