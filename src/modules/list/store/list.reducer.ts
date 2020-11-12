import { ListActions, ListActionTypes } from './list.actions';
import { useSelector } from 'react-redux';
import { State } from '../../../store/store';
import { UserListElement } from '../../../models/user-list.type';

export type ListStateType = {
	list: UserListElement[];
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
					{item: action.item, type: action.itemType}
				]
			};
		case ListActionTypes.RECEIVE_REMOVE_ITEM:
			return {
				...state,
				list: state.list.filter(e => e.item.id !== action.id)
			};
		default:
			return state;
	}
};

export const listSelector = (state: State) => state.listReducer.list;
export const useListReducerList = () => useSelector(listSelector);
export const useListReducerIsFavorite = (id: number) => useSelector((state: State) => state.listReducer.list.some(e => e.item.id === id));

